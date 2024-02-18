import { FooterBtnRound, FooterBtnSquare } from "@/components/common/FooterBtn/FooterBtn.Style";

interface FooterBtnType {
	text: string;
	leftText?: string;
	isSquare?: boolean;
	disabled?: boolean;
	transparent?: boolean;
	positionStatic?: boolean;
}

// text: 기본 버튼 텍스트
// LeftText: 사이드 버튼 텍스트
// shape: 버튼 모양 "round" or "square"
// blur: 버튼 흐리게
// transparent : 배경 투명하게 (default: white)
// positionStatic : position: fixed 제거
// disabled
export default function FooterBtn({
	text,
	leftText,
	isSquare,
	transparent,
	positionStatic,
	disabled,
}: FooterBtnType) {
	return (
		<div
			css={
				isSquare ? FooterBtnRound(transparent === true, positionStatic === true) : FooterBtnSquare
			}
		>
			{leftText && (
				<button type="button" className="cancle" disabled>
					{leftText}
				</button>
			)}
			<button type="button" disabled={disabled}>
				{text}
			</button>
		</div>
	);
}
