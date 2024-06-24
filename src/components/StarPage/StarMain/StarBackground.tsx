import { memo } from "react";

import { css } from "@emotion/react";

import Star from "@/components/StarPage/StarMain/Star";

import { generateStars } from "@/utils/starUtils";

function StarBackground() {
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
	width: 500px; // Global Style max-width와 동일한 값, 단위
	height: 100dvh;
`;

export default memo(StarBackground);
