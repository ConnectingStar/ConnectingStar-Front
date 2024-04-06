import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.25rem 1.5rem 6.4375rem;

	& > :not(div:first-of-type) {
		display: flex;
		flex-direction: column;
		gap: 6px;

		& > span:first-of-type {
			${theme.font.head_c}
			color: ${theme.color.font_gray}
		}
	}

	& > div:nth-of-type(3) {
		gap: 12px;
	}
`;

export const conditionStyle = css`
	display: flex;
	justify-content: space-between;
	border-radius: 15px;
	padding: 1rem;
	background-color: ${theme.color.bg};

	& > p:first-of-type {
		${theme.font.body_a_bold}
	}

	& > p:last-of-type {
		${theme.font.body_a};
		color: ${theme.color.main_blue};
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

	& > div:first-of-type {
		width: 13.625rem;
		${theme.font.body_c};
		color: ${theme.color.button_deactivated};
	}

	& > div:nth-of-type(2) {
		position: absolute;
		width: 2.875rem;
		height: 1.5rem;
		border: 0.1rem solid
			${isToggled ? `${theme.color.button_deactivated}` : `${theme.color.main_blue}`};
		top: 0;
		right: 0;
		transition: 0.3s ease;
		background-color: ${isToggled
			? `${theme.color.button_deactivated}`
			: `${theme.color.main_blue}`};
		border-radius: 12px;
		transform: translate(-1rem, 1rem);
		& > span {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			transition: 0.3s ease;
			right: ${isToggled ? "calc(100% - 1.3rem)" : "0"};
			width: 1.3rem;
			height: 1.3rem;
			border-radius: 50%;
			background-color: white;
		}
	}
`;

export const quitButtonStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	background-color: white;
	width: 100%;
	left: 0;
	bottom: 0;
	border-top: 0.5rem solid ${theme.color.line};
	color: ${theme.color.error};
	height: 3.9375rem;
`;
