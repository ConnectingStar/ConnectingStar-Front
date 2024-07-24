import { useParams } from "react-router-dom";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";

import { REST_RECORD_TEXT, REST_RECORD_BLUE_TEXT } from "@/constants/homeConstants";

import { useHabitRestRecordForm } from "@/hooks/useHabitRestRecordForm";

import type { HabitType } from "@/types/habit";

import { inputBoxStyle, layoutStyle } from "@/components/Habit/RestRecord/RestRecord.style";

interface RestRecordProps {
	habitData: HabitType;
	identity: string;
	nickname: string;
}

const RestRecord = ({ habitData, identity, nickname }: RestRecordProps) => {
	const params = useParams();

	const month = Number(params.month) < 10 ? `0${params.month}` : params.month;
	const date = Number(params.date) < 10 ? `0${params.date}` : params.date;

	const { habitRestRecordRequest, updateInputValue, handleSubmit } = useHabitRestRecordForm({
		initialData: {
			runHabitId: habitData.runHabitId,
			referenceDate: `${params.year}-${month}-${date}`,
			review: "",
		},
	});

	return (
		<div css={layoutStyle}>
			<h1>쉬는 날이었군요?</h1>
			<p>
				{REST_RECORD_TEXT}아예 하지 않는 것보다 <span>{REST_RECORD_BLUE_TEXT.firstText}</span>이{" "}
				<span>{REST_RECORD_BLUE_TEXT.lastText}</span>
				{`랍니다 :)\n\n${identity} ${nickname}님을 응원할게요 😊`}
			</p>

			<div css={inputBoxStyle}>
				<label htmlFor="review">별자취 남기기</label>
				<textarea
					placeholder="오늘 어떤 일로 쉬었는지 혹은 다짐 등을 자유롭게 적어보세요!"
					maxLength={1000}
					id="review"
					value={habitRestRecordRequest.review}
					onChange={(e) => updateInputValue("review", e.target.value)}
				/>
				<span>{habitRestRecordRequest.review.length}/1,000자</span>
			</div>

			<FooterBtn text="완료" handleBtnClick={handleSubmit} />
		</div>
	);
};

export default RestRecord;
