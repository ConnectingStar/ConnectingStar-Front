import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const mainBoxStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 0 1.5rem 3.5rem;
	display: flex;
	flex-direction: column;
	gap: 20px;
	position: relative;
`;

export const mainTopBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding-top: 3.25rem;
`;

export const habitListBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 6px;
`;

export const habitListItemStyle = (status?: string) => css`
	border-radius: 15px;
	height: 5.438rem;
	position: relative;
	padding: 1rem;
	border: ${status === "progress" && `2px solid ${theme.color.main_blue}`};
	display: flex;
	justify-content: space-between;
	background-color: ${status === "progress"
		? theme.color.white
		: status === "end"
			? theme.color.button_disabled
			: theme.color.main_blue};
	padding-left: ${status === "end" && "2.375rem"};

	& > div {
		display: flex;
		align-items: center;
		gap: 1rem;

		& > span {
			${theme.font.body_xs}
			color: ${theme.color.white};
			font-size: 0.6875rem;
		}
	}

	& > button > svg > path {
		fill: ${status === "progress"
			? theme.color.font_deep_gray
			: status === "end"
				? theme.color.button_deactivated
				: theme.color.white};
	}
`;

export const habitContentStyle = (status?: string) => css`
	display: flex;
	flex-direction: column;
	gap: 6px;

	& > span {
		${theme.font.header};
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 14rem;
		color: ${status === "progress"
			? theme.color.font_black
			: status === "end"
				? theme.color.button_deactivated
				: theme.color.white};
	}

	& > div {
		display: flex;
		gap: 6px;
		align-items: center;

		& > span {
			color: ${status === "progress"
				? theme.color.font_black
				: status === "end"
					? theme.color.button_deactivated
					: theme.color.white};
			${theme.font.body_b};
		}

		& > div {
			width: 0.188rem;
			height: 0.188rem;
			border-radius: 50%;
			background-color: ${status === "progress"
				? theme.color.font_black
				: status === "end"
					? theme.color.button_deactivated
					: theme.color.white};
		}
	}
`;

export const addButtonStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2.75rem;
	border-radius: 10px;
	border: 2px solid ${theme.color.line};
`;
