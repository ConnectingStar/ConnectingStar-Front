import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const habitCheckModalStyle = {
	modalWrapper: css`
		display: flex;
		border-radius: 15px;
		padding: 0.9375rem;
		gap: 15px;
		flex-direction: column;
		width: 18rem;
		height: 13.5rem;
		background-color: white;
	`,
	modalTitle: css`
		${theme.font.body_a_bold}
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
