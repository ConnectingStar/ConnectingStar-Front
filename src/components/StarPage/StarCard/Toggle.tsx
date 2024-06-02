import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

interface ToggleProps {
	isToggleActive: boolean;
	onToggle: () => void;
}

export default function Toggle({ isToggleActive, onToggle }: ToggleProps) {
	return (
		<div css={containerStyle}>
			<p>보유 카드 모아보기</p>
			<div css={getToggleStyle(isToggleActive)} onClick={onToggle}></div>
		</div>
	);
}

const containerStyle = css`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 12px;
	margin: 1.25rem 0;
	${theme.font.body_b_bold}
`;

const getToggleStyle = (isToggleActive: boolean) => css`
	width: 2.875rem;
	height: 1.5rem;
	padding: 0.125rem;
	border-radius: 1rem;
	background-color: ${isToggleActive ? theme.color.main_blue : theme.color.button_deactivated};

	:after {
		content: "";
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 100%;
		margin-left: ${isToggleActive ? "calc(100% - 1.25rem)" : "0"};
		background-color: #fff;
		transition: margin-left 0.5s ease;
	}
`;
