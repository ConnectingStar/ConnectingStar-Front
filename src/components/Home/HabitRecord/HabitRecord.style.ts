import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.5rem;
	gap: 40px;
	${theme.font.body_a};
	color: ${theme.color.font_black};

	& h1 {
		${theme.font.head_c};
		color: ${theme.color.font_gray};
	}

	& > .date {
		display: flex;
		flex-direction: column;
		${theme.font.head_a}
	}

	& > .identity {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
`;

export const conditionStyle = css`
	display: flex;
	flex-direction: column;
	gap: 6px;
	& > div {
		display: flex;
		align-items: center;
	}
	.unit {
		gap: 12px;
		& > textarea {
			width: 4.875rem;
		}
		& > span {
			& > p {
				display: inline;
				color: ${theme.color.main_blue};
			}
		}
	}
	& textarea {
		border: none;
		white-space: nowrap;
		height: 3.4375rem;
		background-color: ${theme.color.bg};
		border-radius: 15px;
		padding: 15px;
		resize: none;
	}
	& textarea::placeholder {
		${theme.color.button_deactivated}
	}
`;

export const iconsStyle = (isActivated: boolean, selectedIcon: number | null) => css`
	display: flex;
	flex-direction: column;
	gap: 12px;
	opacity: ${!isActivated && 0.5};
	pointer-events: ${!isActivated && "none"};
	& > div {
		display: flex;
		justify-content: center;
		gap: 18px;
		& > span {
			transition: 0.3s ease;
		}
		& > .selected {
			opacity: 1;
		}
		& > :not(.selected) {
			opacity: ${!selectedIcon ? 1 : 0.5};
		}
	}
	& > h1 {
		& > p {
			display: inline;
			color: ${theme.color.main_blue};
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
	& > label {
		color: ${theme.color.font_gray};
		${theme.font.head_c};
	}
	& > textarea {
		all: unset;
		padding: 1rem;
		background-color: ${theme.color.bg};
		border-radius: 15px;
		height: 11.875rem;
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

export const footerBtnWrapper = (isActivated: boolean, selectedIcon: number | null) => css`
	/* transition: 0.3s ease;
	opacity: ${(!isActivated || !selectedIcon) && 0.5};
	pointer-events: ${(!isActivated || !selectedIcon) && "none"}; */
`;
