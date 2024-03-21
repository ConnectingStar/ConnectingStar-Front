import { css } from "@emotion/react";

import Star from "@/components/StarPage/StarMain/Star";

import generateStars from "@/utils/generateStars";

export default function StarBackground() {
	const stars = generateStars();

	return (
		<svg css={starStyle}>
			{stars.map((star) => (
				<Star key={star.id} cx={star.cx} cy={star.cy} r={star.r} />
			))}
		</svg>
	);
}

const starStyle = css`
	position: absolute;
	width: 500px;
	height: 100dvh;
`;