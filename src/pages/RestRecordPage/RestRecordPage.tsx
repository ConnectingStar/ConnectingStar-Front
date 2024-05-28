import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getUserInfo } from "@/api/user/userThunk";

import { REST_RECORD_TEXT, REST_RECORD_BLUE_TEXT } from "@/constants/homeConstants";
import { PATH } from "@/constants/path";

import { inputBoxStyle, layoutStyle } from "@/pages/RestRecordPage/RestRecordPage.style";

const RestRecordPage = () => {
	const dispatch = useAppDispatch();

	const { userData } = useAppSelector((state) => state.user);

	const navigate = useNavigate();

	const [traceText, setTraceText] = useState("");

	useEffect(() => {
		dispatch(getUserInfo());
	}, []);

	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.TextButton onClick={() => navigate(PATH.HABIT_MANAGE)}>관리</Header.TextButton>
			</Header>
			<div css={layoutStyle}>
				<h1>쉬는 날이었군요?</h1>
				<p>
					{REST_RECORD_TEXT}아예 하지 않는 것보다 <span>{REST_RECORD_BLUE_TEXT.firstText}</span>이{" "}
					<span>{REST_RECORD_BLUE_TEXT.lastText}</span>
					{`랍니다 :)\n\n${userData.identity} ${userData.nickname}님을 응원할게요 😊`}
				</p>

				<div css={inputBoxStyle}>
					<label htmlFor="traceText">별자취 남기기</label>
					<textarea
						placeholder="오늘 어떤 일로 쉬었는지 혹은 다짐 등을 자유롭게 적어보세요!"
						maxLength={1000}
						id="traceText"
						value={traceText}
						onChange={(e) => setTraceText(e.target.value)}
					/>
					<span>{traceText.length}/1,000자</span>
				</div>

				<FooterBtn text="완료" isTransparent />
			</div>
		</>
	);
};

export default RestRecordPage;
