import { useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";

import { REST_RECORD_TEXT, REST_RECORD_BLUE_TEXT } from "@/constants/homeConstants";

import { inputBoxStyle, layoutStyle } from "@/components/Habit/RestRecord/RestRecord.style";

function RestRecord() {
	const [traceText, setTraceText] = useState("");

	return (
		<div css={layoutStyle}>
			<h1>쉬는 날이었군요?</h1>
			<p>
				{REST_RECORD_TEXT}아예 하지 않는 것보다 <span>{REST_RECORD_BLUE_TEXT.firstText}</span>이{" "}
				<span>{REST_RECORD_BLUE_TEXT.lastText}</span>
				{/* api 연결 후 변경 */}
				{`랍니다 :)\n\n정체성한 닉네임님을 응원할게요 😊`}
			</p>

			{/* 입력버튼은 어떻게 할 것인가? */}
			<div css={inputBoxStyle}>
				<label htmlFor="traceText">별자취 남기기</label>
				<textarea
					placeholder="오늘 어떤 일로 쉬었는지 혹은 다짐 등을 자유롭게 적어보세요!"
					maxLength={1000}
					id="traceText"
					value={traceText}
					onChange={(e) => {
						setTraceText(e.target.value);
					}}
				/>
				<span>{traceText.length}/1,000자</span>
			</div>

			{/* 습관 관리 페이지 제작 후 navigate 연결 */}
			<FooterBtn text="완료" isTransparent />
		</div>
	);
}

export default RestRecord;
