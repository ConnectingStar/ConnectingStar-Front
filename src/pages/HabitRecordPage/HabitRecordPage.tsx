import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import HabitPracticeRecord from "@/components/Habit/HabitPracticeRecord/HabitPracticeRecord";

import { getHabitRecord } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getUserInfo } from "@/api/user/userThunk";

import { PATH } from "@/constants/path";

import { layoutStyle } from "@/pages/HabitRecordPage/HabitRecordPage.style";

const HabitRecordPage = () => {
	const dispatch = useAppDispatch();

	const { habitRecord } = useAppSelector((state) => state.habit);
	const { userData } = useAppSelector((state) => state.user);

	const params = useParams();

	const navigate = useNavigate();

	console.log(habitRecord);

	const mode = ["휴식", "실천"];
	const randomIndex = Math.floor(Math.random() * 10);

	const month = Number(params.month) < 10 ? `0${params.month}` : params.month;
	const date = Number(params.date) < 10 ? `0${params.date}` : params.date;

	useEffect(() => {
		dispatch(
			getHabitRecord({
				runHabitId: Number(params.habitId),
				referenceDate: `${params.year}-${month}-${date}`,
			}),
		);
		dispatch(getUserInfo());
	}, []);

	if (!habitRecord) {
		return <div />;
	}

	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<main css={layoutStyle}>
				<h1>{`${params.month}월 ${params.date}일\n${userData.nickname}님의 ${mode[randomIndex % 2]} 기록`}</h1>

				{mode[randomIndex % 2] === "실천" && <HabitPracticeRecord habitRecord={habitRecord} />}

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
