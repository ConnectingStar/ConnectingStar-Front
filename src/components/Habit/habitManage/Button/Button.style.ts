import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 5.75rem;
	border-radius: 15px;
	background-color: ${theme.color.bg};
	padding: 1rem;

	& > span {
		display: flex;
		align-items: center;
		gap: 20px;

		& > h1 {
			${theme.font.body_a_bold}
		}

		& > p {
			${theme.font.body_a};
			color: ${theme.color.main_blue};
		}
	}

	& > div:first-of-type {
		width: 13.625rem;
		${theme.font.body_c};
		color: ${theme.color.button_deactivated};
	}
`;

export const getToggleButtonStyle = (isActive: boolean) => {
	return css`
		position: absolute;
		width: 2.875rem;
		height: 1.5rem;
		border: 0.1rem solid
			${isActive ? `${theme.color.main_blue}` : `${theme.color.button_deactivated}`};
		top: 0;
		right: 0;
		transition: 0.5s ease;
		background-color: ${isActive
			? `${theme.color.main_blue}`
			: `${theme.color.button_deactivated}`};
		border-radius: 12px;
		transform: translate(-1rem, 1rem);

		& > span {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			transition: 0.5s ease;
			left: ${isActive ? "calc(100% - 1.3rem)" : "0"};
			width: 1.3rem;
			height: 1.3rem;
			border-radius: 50%;
			background-color: white;
		}
	`;
};
