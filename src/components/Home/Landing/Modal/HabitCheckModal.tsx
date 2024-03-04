import { css } from "@emotion/react";

import Modal from "@/components/common/Modal/Modal";

function HabitCheckModal({ text }: { text: string }) {
	return (
		<Modal>
			<div css={layoutStyle}>
				<h1>아래의 습관을 실천하였나요?</h1>
				<p>{text}</p>
				{/* 이후 공통 하단 버튼 추가 */}
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
	gap: 20px;
	background-color: #fff;
	padding: 1rem;

	& > h1 {
		font-size: 1.125rem;
		font-weight: 700;
	}
`;
