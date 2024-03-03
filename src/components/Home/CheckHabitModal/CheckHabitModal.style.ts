import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const checkHabitModalStyle = {
	container: css`
		z-index: 5;
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		left: 0;
		padding: 1.5rem;
		background-color: rgba(0, 0, 0, 0.8);
		width: 100%;
		height: 100%;
	`,
	modalWrapper: css`
		position: absolute;
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		flex-direction: column;
		gap: 4px;
		z-index: 6;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: calc(100% - 4rem);
		border-radius: 15px;
		height: 13.75rem;
		background-color: white;
	`,
	articleWrapper: css`
		width: 100%;
		height: 100%;
		overflow: hidden;
		${theme.font.body_a}
	`,
	buttonWrapper: css`
		display: flex;
		align-items: center;
		width: 100%;
		gap: 0.7rem;
	`,
	button: css`
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 2.5rem;
		border-radius: 8px;
		${theme.font.button_big}
		&.deactivated {
			background-color: ${theme.color.button_disabled};
			color: ${theme.color.button_deactivated};
		}
		&.activated {
			background-color: ${theme.color.main_blue};
			color: white;
		}
	`,
};
