import { Link } from "react-router-dom";

import { css } from "@emotion/react";

import starCardBook from "@/assets/image/img-3d-star-card-book.png";

import { getOutlineTextStyle } from "@/components/StarPage/StarMain/getOutlineText.style";

export default function StarCardLink() {
	return (
		<Link to="/star-card" css={containerStyle}>
			<img src={starCardBook} alt="별자리 카드" />
			<span css={getOutlineTextStyle("#7400cf", "head_c")} data-text="별자리 카드">
				별자리 카드
			</span>
		</Link>
	);
}

const containerStyle = css`
	width: 4.25rem;
	height: 4.375rem;
	position: absolute;
	right: 1.5rem;
	bottom: 4.75rem;

	& > img {
		width: 4.0625rem;
	}

	& > span {
		position: absolute;
		bottom: 0;
	}
`;
