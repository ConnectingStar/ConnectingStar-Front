import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

interface habitStyleStatus {
	status: string;
}
export const habitsStyle = {
	container: css`
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	`,
	habitWrapper: ({ status }: habitStyleStatus) => css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1.25rem 0 1.25rem;
		width: 100%;
		height: 4.875rem;
		border-radius: 20px;
		overflow: hidden;
		background-color: ${status === "rest" && `${theme.color.button_disabled}`};
		border: 2px solid ${theme.color.line};
		.targetHabit {
			display: flex;
			${theme.font.body_a}
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 100%;
		}
	`,
	habitRest: css`
		display: block;
		${theme.font.body_xs}
		color: ${theme.color.main_blue};
	`,
	habitArticle: ({ status }: habitStyleStatus) => css`
		text-decoration: ${status !== "none" && "line-through"};
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
