import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.25rem 1.5rem 5.438rem 1.5rem;
	gap: 40px;
	white-space: pre-wrap;

	${theme.font.body_a}

	h1 {
		${theme.font.head_a};
	}

	h2,
	h3 {
		${theme.font.head_c};
		color: ${theme.color.font_gray};
	}

	& > section {
		ul {
			display: flex;
			flex-direction: column;
			gap: 6px;
		}
		& > h3:first-of-type {
			margin-bottom: 0.75rem;
		}
		& > h3:last-of-type {
			margin-top: 0.75rem;
		}
	}

	& > .icon {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	& > .record {
		display: flex;
		flex-direction: column;
		gap: 12px;
		& > div {
			padding: 1rem;
			background-color: ${theme.color.bg};
			border-radius: 15px;
			height: 11.875rem;
		}
	}
`;

export const inputBoxStyle = (isActivated: boolean, selectedIcon: number | null) => css`
	display: flex;
	flex-direction: column;
	gap: 12px;
	position: relative;
	opacity: ${(!isActivated || !selectedIcon) && 0.5};
	pointer-events: ${(!isActivated || !selectedIcon) && "none"};
	label {
		color: ${theme.color.font_gray};
		${theme.font.head_c};
	}
	textarea {
		all: unset;

		-ms-overflow-style: none; /* 인터넷 익스플로러 */
		scrollbar-width: none; /* 파이어폭스 */
		&::-webkit-scrollbar {
			display: none;
		}
		&::placeholder {
			color: ${theme.color.button_deactivated};
		}
	}
	& > span {
		${theme.font.body_c_bold};
		color: ${theme.color.font_gray};
		align-self: flex-end;
	}
`;
