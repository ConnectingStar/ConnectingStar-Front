import { FooterBtnRound, FooterBtnSquare } from "@/components/common/FooterBtn/FooterBtn.Style";

interface FooterBtnType {
	text: string;
	shape: string;
	blur?: boolean;
	cancleBtn?: boolean;
}

// text, blur, cancleBtn, shape = "square" or "round"
export default function FooterBtn({ text, shape, blur, cancleBtn }: FooterBtnType) {
	return (
		<div css={shape === "round" ? FooterBtnRound(blur === true) : FooterBtnSquare(blur === true)}>
			{cancleBtn ? (
				<button type="button" className="cancle">
					취소
				</button>
			) : null}
			<button type="button">{text}</button>
		</div>
	);
}
