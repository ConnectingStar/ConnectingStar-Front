import { FooterBtnRound, FooterBtnSquare } from "@/components/common/FooterBtn/FooterBtn.Style";

interface FooterBtnType {
	text: string;
	leftText?: string;
	isSquare?: boolean;
	disabled?: boolean;
	transparent?: boolean;
	positionStatic?: boolean;
	rightOnclick?: () => void;
	leftOnclick?: () => void;
}

// text: 기본 버튼 텍스트
// leftText: 사이드 버튼 텍스트
// isSquare: 버튼 모양 (default : round)
// disabled: 버튼 비활성화(blur)
// transparent : 배경 투명하게 (default: white)
// positionStatic : position: fixed 제거
export default function FooterBtn({
	text,
	leftText,
	isSquare,
	disabled,
	transparent,
	positionStatic,
	rightOnclick,
	leftOnclick,
}: FooterBtnType) {
	return (
		<div
			css={
				isSquare ? FooterBtnSquare : FooterBtnRound(transparent === true, positionStatic === true)
			}
		>
			{leftText && (
				<button type="button" className="cancle" onClick={leftOnclick}>
					{leftText}
				</button>
			)}
			<button type="button" disabled={disabled} onClick={rightOnclick}>
				{text}
			</button>
		</div>
	);
}
