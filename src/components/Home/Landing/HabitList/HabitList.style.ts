import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	gap: 0.375rem;
`;

export const habitArticleStyle = (status?: string) => {
	return css`
		position: relative;
		padding: 1rem;
		border: ${status === "rest" || status === "end" ? "none" : `2px solid ${theme.color.line}`};
		border-radius: 20px;
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

		& .menuIcon {
			position: absolute;
			right: 1rem;
			top: 1rem;
		}
	`;
};
