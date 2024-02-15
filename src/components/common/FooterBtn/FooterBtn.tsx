import { FooterBtnRound, FooterBtnSquare } from "@/components/common/FooterBtn/FooterBtn.Style";

interface FooterBtnType {
	text: string;
	cancleText?: string;
	shape: string;
	blur?: boolean;
	transparent?: boolean;
}

// text, cancleText blur, cancleBtn, shape = "square" or "round"
// backgournd-color: transparent
export default function FooterBtn({ text, cancleText, shape, blur, transparent }: FooterBtnType) {
	return (
		<div
			css={
				shape === "round"
					? FooterBtnRound(blur === true, transparent === true)
					: FooterBtnSquare(blur === true)
			}
		>
			{cancleText ? (
				<button type="button" className="cancle">
					{cancleText}
				</button>
			) : null}
			<button type="button">{text}</button>
		</div>
	);
}
