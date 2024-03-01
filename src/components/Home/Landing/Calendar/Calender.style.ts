import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const titleBoxStyle = css`
	display: flex;
	justify-content: space-between;
	align-items: center;

	.dateBox {
		display: flex;
		align-items: center;
		gap: 8px;

		& > span {
			${theme.font.head_a}

			&:last-of-type {
				${theme.font.body_c}
			}
		}
	}

	& > span {
		${theme.font.button_big}
		color: ${theme.color.font_deep_gray};
	}
`;

export const carouselBoxStyle = css`
	position: relative;
	overflow-x: scroll;
	height: 5rem;
	-ms-overflow-style: none; /* 인터넷 익스플로러 */
	scrollbar-width: none; /* 파이어폭스 */

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const carouselInnerBoxStyle = css`
	display: flex;
`;

export const dayBoxStyle = (isSelected: boolean, isPlanned: boolean, isNextDate: boolean) => {
	return css`
		display: flex;
		flex-direction: column;
		align-items: center;
		min-width: 47px;
		height: 80px;
		border-radius: 8px;
		background-color: ${isSelected && "rgba(1, 118, 249, 0.1)"};
		color: ${isNextDate && `${theme.color.button_deactivated}`};

		& > span {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 50%;
			${isSelected ? theme.font.body_b_bold : theme.font.body_b}

			&:last-of-type {
				${theme.font.body_b_bold};

				& > label {
					width: 24px;
					height: 24px;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
					color: ${isPlanned && "#fff"};
					background-color: ${isPlanned && `${theme.color.main_blue}`};
				}
			}
		}
	`;
};
