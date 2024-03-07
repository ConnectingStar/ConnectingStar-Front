import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.25rem 1.5rem 0;

	.tab {
		display: flex;
		flex-direction: column;
		gap: 12px;

		& > label {
			${theme.font.head_c}
			color: ${theme.color.font_gray}
		}
	}

	.condition {
		display: flex;
		justify-content: space-between;
		border-radius: 15px;
		padding: 1rem;
		height: 3.4375rem;
		background-color: ${theme.color.bg};
		& > span:first-of-type {
			${theme.font.body_a_bold}
		}
		& > span:nth-of-type(2) {
			${theme.font.body_a};
			color: ${theme.color.main_blue};
		}
	}
`;

export const alarmBoxStyle = (isToggled: boolean) => css`
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

	& > article {
		width: 13.625rem;
		${theme.font.body_c};
		color: ${theme.color.button_deactivated};
	}

	& > .toggle {
		position: absolute;
		width: 2.875rem;
		height: 1.5rem;
		border: 0.1rem solid
			${isToggled ? `${theme.color.main_blue}` : `${theme.color.button_deactivated}`};
		top: 0;
		right: 0;
		background-color: ${isToggled
			? `${theme.color.main_blue}`
			: `${theme.color.button_deactivated}`};
		border-radius: 0.75rem;
		transform: translate(-1rem, 1rem);
		& > span {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: ${isToggled && "calc(100% - 1.3rem)"};
			width: 1.3rem;
			height: 1.3rem;
			border-radius: 50%;
			background-color: white;
		}
	}
`;

export const quitButtonStyle = css`
	border-top: 0.5rem solid #f0f0f6;
	color: ${theme.color.error};
	height: 3.9375rem;
	width: 100%;
`;
