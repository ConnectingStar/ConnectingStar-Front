import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	gap: 6px;
`;

export const habitArticleStyle = (status?: string) => {
	return css`
		position: relative;
		padding: 1rem;
		border: ${status === "rest" || status === "end" ? "none" : `2px solid ${theme.color.line}`};
		border-radius: 15px;
		height: 4.875rem;
		background-color: ${status === "rest"
			? theme.color.button_disabled
			: status === "end" && theme.color.bg};

		${status === "add" && { display: "flex", alignItems: "center", justifyContent: "center" }}

		& > div {
			display: flex;
			align-items: center;
			gap: 16px;

			& > span {
				${theme.font.body_xs}
				color: ${theme.color.main_blue};
				font-size: 0.6875rem;
			}

			& > p {
				max-width: 14rem;
				text-decoration: ${(status === "rest" || status === "complete") && "line-through"};

				${status === "end" && {
					color: theme.color.button_deactivated,
					marginLeft: "36px",
				}}
			}
		}

		& > button {
			position: absolute;
			width: 1rem;
			height: 2rem;
			right: 1rem;
			top: 1rem;
		}
	`;
};
