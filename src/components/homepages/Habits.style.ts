import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const habitsStyle = {
	container: css`
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 0.75rem;
	`,
	habitWrapper: (props: { status: string }) => css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1.25rem 0 1.25rem;
		width: 100%;
		height: 4.875rem;
		border-radius: 20px;
		overflow: hidden;
		background-color: ${props.status === "rest" ? `${theme.color.button_disabled}` : "transparent"};
		border: 2px solid ${theme.color.line};
	`,
	habitInner: css`
		display: flex;
		${theme.font.body_a}
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100%;
	`,
	habitRest: css`
		display: block;
		${theme.font.body_xs}
		color: ${theme.color.main_blue};
	`,
	habitArticle: (props: { status: string }) => css`
		text-decoration: ${props.status !== "none" ? "line-through" : "none"};
		margin: 0.5rem 0.75rem 0.5rem 0.75rem;
		width: 100%;
		height: 100%;
		overflow: hidden;
	`,
	habitArticleInner: css`
		${theme.font.body_a}
	`,
	addButton: css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 4.875rem;
		border-radius: 20px;
		border: 2px solid ${theme.color.line};
		span {
			color: ${theme.color.button_deactivated};
			font-size: 1.25rem;
		}
	`,
};
