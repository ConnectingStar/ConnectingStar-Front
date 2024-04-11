import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

function HabitCheckModal({ text }: { text: string }) {
	return (
		<Modal>
			<div css={layoutStyle}>
				<h1>아래의 습관을 실천하였나요?</h1>
				<p>{text}</p>
				<FooterBtn leftText="쉬는 날 🙂" text="실천 완료 😎" isPositionStatic />
			</div>
		</Modal>
	);
}

export default HabitCheckModal;

export const layoutStyle = css`
	width: 18rem;
	height: 13.75rem;
	display: flex;
	flex-direction: column;
	border-radius: 15px;
	background-color: #fff;
	padding: 1rem;

	& > h1 {
		font-size: 1.125rem;
		font-weight: 700;
		margin-bottom: 1.25rem;
	}

	& > p {
		margin-bottom: 2.5rem;
	}
`;
