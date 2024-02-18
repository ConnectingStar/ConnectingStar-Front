import { FooterBtnRound, FooterBtnSquare } from "@/components/common/FooterBtn/FooterBtn.Style";

interface FooterBtnType {
	text: string;
	sideBtnText?: string;
	shape: string;
	blur?: boolean;
	transparent?: boolean;
	positionStatic?: boolean;
}

// text: 기본 버튼 텍스트
// sideBtnText: 사이드 버튼 텍스트
// shape: 버튼 모양 "round" or "square"
// blur: 버튼 흐리게
// transparent : 배경 투명하게 (default: white)
// positionStatic : position: fixed 제거

export default function FooterBtn({
	text,
	sideBtnText,
	shape,
	blur,
	transparent,
	positionStatic,
}: FooterBtnType) {
	return (
		<div
			css={
				shape === "round"
					? FooterBtnRound(blur === true, transparent === true, positionStatic === true)
					: FooterBtnSquare(blur === true)
			}
		>
			{sideBtnText && (
				<button type="button" className="cancle">
					{sideBtnText}
				</button>
			)}
			<button type="button">{text}</button>
		</div>
	);
}
