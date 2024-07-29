import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import HabitPracticeRecord from "@/components/Habit/HabitPracticeRecord/HabitPracticeRecord";

import { getHabitRecord } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getOnlyUserInfo } from "@/api/user/userThunk";

import { PATH } from "@/constants/path";

import { layoutStyle } from "@/pages/HabitRecordPage/HabitRecordPage.style";

const HabitRecordPage = () => {
	const dispatch = useAppDispatch();

	const { habitRecord } = useAppSelector((state) => state.habit);
	const { userInfo } = useAppSelector((state) => state.user);

	const params = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getHabitRecord(Number(params.habitId)));
		dispatch(getOnlyUserInfo());
	}, []);

	if (!habitRecord || !userInfo) {
		return <div />;
	}

	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<main css={layoutStyle}>
				<h1>{`${Number(habitRecord.runDate.split("T")[0].split("-")[1])}월 ${Number(habitRecord.runDate.split("T")[0].split("-")[2])}일\n${userInfo.nickname}님의 ${habitRecord.isRest ? "휴식" : "실천"} 기록`}</h1>

				{habitRecord.isRest === false && <HabitPracticeRecord habitRecord={habitRecord} />}

				<div>
					<h2>별자취 남기기</h2>
					<p>{habitRecord.review}</p>
				</div>
			</main>
			<FooterBtn text="확인" isTransparent handleBtnClick={() => navigate(PATH.HOME)} />
		</>
	);
};

export default HabitRecordPage;
