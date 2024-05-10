import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const toggleButtonStyle = (isActive?: boolean) => css`
	display: flex;
	align-items: center;
	position: relative;
	width: 2.875rem;
	height: 1.5rem;
	border-radius: 16px;
	background-color: ${isActive ? theme.color.main_blue : theme.color.button_deactivated};

	& > div {
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 100%;
		position: absolute;
		background-color: #fff;
		left: ${isActive ? "calc(100% - 22px)" : "2px"};
		transition: left 0.5s ease;
	}
`;
