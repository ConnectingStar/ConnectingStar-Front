import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	padding: 1.125rem 1.5rem 6.4375rem;
	border-radius: 15px 15px 0 0;
	color: ${theme.color.font_black};
	background-color: #fff;

	& > h1 {
		color: ${theme.color.font_black};
		${theme.font.header};
	}

	& > ul {
		margin-top: 1.875rem;
		display: flex;
		flex-direction: column;
		gap: 2.25rem;

		& > li {
			display: flex;
			align-items: center;
			gap: 20px;

			& > p {
				color: ${theme.color.font_black};
			}

			& > input {
				display: none;
			}
		}
	}
`;

export const getCheckBoxLabelStyle = (isCheck: boolean) => {
	return css`
		width: 24px;
		height: 24px;
		border: 1px solid ${isCheck ? theme.color.main_blue : theme.color.button_disabled};
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${isCheck && theme.color.main_blue};
	`;
};
