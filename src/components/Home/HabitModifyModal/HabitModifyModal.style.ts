import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const habitModifyModalStyle = {
	modalWrapper: css`
		display: flex;
		border-radius: 15px 15px 0px 0px;
		padding: 0.9375rem 0.9375rem 0 0.9375rem;
		gap: 15px;
		flex-direction: column;
		width: 22.5rem;
		height: 7.25rem;
		background-color: white;
	`,
	modalTitle: css`
		${theme.font.header}
	`,
};
