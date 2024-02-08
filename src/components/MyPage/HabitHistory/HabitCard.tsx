import CloseIcon from "@/assets/icon/ic-close.svg?react";

import {
	layoutStyle,
	textBoxStyle,
	textStyle,
} from "@/components/MyPage/HabitHistory/HabitCard.style";

interface habitCardDataType {
	isEnd: boolean;
	title: string;
	startDate: string;
	endDate?: string;
	successCount: number;
	failCount: number;
	endReason?: string;
}

const HabitCard = ({
	isEnd,
	title,
	startDate,
	endDate,
	successCount,
	failCount,
	endReason,
}: habitCardDataType) => {
	return (
		<div css={layoutStyle}>
			{isEnd && <CloseIcon />}
			<h1>{title}</h1>

			{isEnd ? (
				<div css={textBoxStyle}>
					<p css={textStyle}>
						<span>시작일 : {startDate}</span>
						<span>종료일 : {endDate}</span>
					</p>
					<p css={textStyle}>
						<span>실천 : {successCount}</span>
						<span>휴식 : {failCount}</span>
					</p>
					<p css={textStyle}>
						<span>종료 사유 : {endReason}</span>
					</p>
				</div>
			) : (
				<p css={textStyle}>
					<span>시작일 : {startDate}</span>
					<span>실천 : {successCount}</span>
					<span>휴식 : {failCount}</span>
				</p>
			)}
		</div>
	);
};

export default HabitCard;
