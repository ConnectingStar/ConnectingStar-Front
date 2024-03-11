import { css } from "@emotion/react";

import star from "@/assets/image/img-3d-star.png";

import { theme } from "@/styles/theme";
export default function StarCount({ starCount }: { starCount: number }) {
	return (
		<div css={starInfoStyle}>
			<img src={star} alt="3D 별" />
			{/* TODO: 별 개수는 API 연결 후 수정 예정 */}
			<strong>{starCount}</strong>
		</div>
	);
}

const starInfoStyle = css`
	width: fit-content;
	position: relative;
	top: 1.25rem;
	left: 1.5rem;

	img {
		width: 3.125rem;
		position: absolute;
		top: -50%;
		left: -0.875rem;
	}

	strong {
		padding: 0.1875rem 1.625rem 0.25rem 2.8125rem;
		border-radius: 15px;
		${theme.font.body_a_bold}
		color: #fff;
		background-color: #38567880; // main_deep_blue + 투명도 50%
	}
`;
