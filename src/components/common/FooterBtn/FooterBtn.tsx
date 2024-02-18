import { FooterBtnRound, FooterBtnSquare } from "@/components/common/FooterBtn/FooterBtn.Style";

interface FooterBtnType {
	text: string;
	sideBtnText?: string;
	shape: string;
	blur?: boolean;
	transparent?: boolean;
}

// text, cancleText blur, cancleBtn, shape = "square" or "round"
// backgournd-color: transparent
export default function FooterBtn({ text, sideBtnText, shape, blur, transparent }: FooterBtnType) {
	return (
		<div
			css={
				shape === "round"
					? FooterBtnRound(blur === true, transparent === true)
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
