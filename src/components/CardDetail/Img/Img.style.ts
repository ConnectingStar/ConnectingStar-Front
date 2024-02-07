import { css } from "@emotion/react";

export const imgStyle = css`
	height: 312px;
	border-radius: 15px;
	margin-bottom: 1.25rem;
	position: relative;
	background-color: #d9d9d9;
	overflow: hidden;

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&.selected {
		border: 5px solid #0176f9;
	}
`;
