import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

const CommonButtonStyle = {
	container: css`
		max-width: 500px;
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	round: css`
		box-sizing: content-box;
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 500px;
		width: 100%;
		height: 55px;
		padding: 16px 24px;
		gap: 8px;
		& > button {
			width: 100%;
			height: 55px;
			border-radius: 15px;
			${theme.font.button_big};
			background-color: ${theme.color.main_Blue};
			color: white;
		}
		.canclebutton {
			background-color: ${theme.color.button_disabled};
			color: ${theme.color.button_deactivated};
		}
	`,
	square: css`
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 55px;
		${theme.font.button_big}
		& > button {
			width: 100%;
			height: 100%;
			color: white;
			background-color: ${theme.color.main_Blue};
		}
		.canclebutton {
			background-color: ${theme.color.button_disabled};
			color: ${theme.color.button_deactivated};
		}
	`,
};

export default CommonButtonStyle;
