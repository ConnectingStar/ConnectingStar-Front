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

	& > p {
		display: flex;
		align-items: center;
		gap: 8px;

		& > span:first-of-type {
			${theme.font.head_a}
		}

		& > span:last-of-type {
			${theme.font.body_c}
		}
	}

	& > button {
		${theme.font.button_big}
		color: ${theme.color.font_deep_gray};
	}
`;

export const carouselBoxStyle = css`
	position: relative;
	overflow-x: scroll;
	height: 5rem;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}

	& > div {
		display: flex;
	}
`;

export const dayBoxStyle = (isSelected: boolean, isPlanned: boolean, isNextDate: boolean) => css`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 2.9375rem;
	height: 5rem;
	border-radius: 10px;
	background-color: ${isSelected && `${theme.color.main_light_blue}`};
	color: ${isNextDate && `${theme.color.button_deactivated}`};

	& > span {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50%;
		${isSelected ? theme.font.body_b_bold : theme.font.body_b}

		&:last-of-type {
			${theme.font.body_b_bold};

			& > p {
				width: 1.5rem;
				height: 1.5rem;
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
