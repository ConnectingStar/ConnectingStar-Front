import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	justify-content: center;
	width: 22.5rem;
	height: 100dvh;
	padding: env(safe-area-inset-top) 1.5rem 0;
	margin: 0 auto;

	// NOTE: iOS PWA에서 dvh 단위 적용 시 하단 여백 생겨서 추가
	@media (display-mode: standalone) {
		height: 100vh;
	}
`;

export const boxStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	margin-bottom: 10.125rem;

	img[alt="logo"] {
		width: 18.4375rem;
		margin: auto 0;
	}
`;

export const buttonBoxStyle = css`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 0.375rem;

	& > button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 3.438rem;
		border-radius: 15px;
		gap: 0.313rem;

		&:first-of-type {
			background-color: #fae100;
		}

		&:last-of-type {
			border: 2px solid ${theme.color.line};
		}
	}
`;

export const privacyBoxStyle = css`
	position: fixed;
	bottom: 3.125rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 22.5rem;
	color: ${theme.color.button_deactivated};
	${theme.font.body_xs};

	& > span {
		display: flex;
	}

	.line::after {
		content: "ㅣ";
		float: right;
	}
`;
