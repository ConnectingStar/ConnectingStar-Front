import { footerBtnStyle } from "@/components/common/FooterBtn/FooterBtn.Style";

import { theme } from "@/styles/theme";

interface FooterBtnType {
	text: string;
	leftText?: string;
	isSquare?: boolean;
	disabled?: boolean;
	buttonColor?: string;
	isTransparent?: boolean;
	isPositionStatic?: boolean;
	handleBtnClick?: () => void;
	handleLeftBtnClick?: () => void;
}

// text: 기본 버튼 텍스트
// leftText: 사이드 버튼 텍스트
// isSquare: 버튼 모양 (default : round)
// disabled: 버튼 비활성화(blur)
// isTransparent : 배경 투명하게 (default: white)
// isPositionStatic : position: fixed 제거
// handleBtnClick : 우측버튼 onclick
// handleLeftBtnClick : 좌측버튼 onclick
export default function FooterBtn({
	text,
	leftText,
	isSquare,
	disabled,
	buttonColor = theme.color.main_blue,
	isTransparent,
	isPositionStatic,
	handleBtnClick,
	handleLeftBtnClick,
}: FooterBtnType) {
	return (
		<div css={footerBtnStyle(isTransparent, isSquare, isPositionStatic, buttonColor)}>
			{leftText && (
				<button type="button" className="cancel" onClick={handleLeftBtnClick}>
					{leftText}
				</button>
			)}

			<button type="button" disabled={disabled} onClick={handleBtnClick}>
				{text}
			</button>
		</div>
	);
}
