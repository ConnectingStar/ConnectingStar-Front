import { footerBtnStyle } from "@/components/common/FooterBtn/FooterBtn.Style";

interface FooterBtnType {
	text: string;
	leftText?: string;
	isSquare?: boolean;
	disabled?: boolean;
	isTransparent?: boolean;
	isPositionStatic?: boolean;
	rightOnclick?: () => void;
	leftOnclick?: () => void;
}

// text: 기본 버튼 텍스트
// leftText: 사이드 버튼 텍스트
// isSquare: 버튼 모양 (default : round)
// disabled: 버튼 비활성화(blur)
// isTransparent : 배경 투명하게 (default: white)
// isPositionStatic : position: fixed 제거
// rightOnclick : 우측버튼 onclick
// leftOnclick : 좌측버튼 onclick
export default function FooterBtn({
	text,
	leftText,
	isSquare,
	disabled,
	isTransparent,
	isPositionStatic,
	rightOnclick,
	leftOnclick,
}: FooterBtnType) {
	return (
		<div css={footerBtnStyle(isTransparent, isSquare, isPositionStatic)}>
			{leftText && (
				<button type="button" className="cancel" onClick={leftOnclick}>
					{leftText}
				</button>
			)}

			<button type="button" disabled={disabled} onClick={rightOnclick}>
				{text}
			</button>
		</div>
	);
}
