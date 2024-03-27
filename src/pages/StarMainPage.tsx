import { css } from "@emotion/react";

import Gnb from "@/components/common/Gnb/Gnb";
import StarBackground from "@/components/StarPage/StarMain/StarBackground";
import StarButton from "@/components/StarPage/StarMain/StarButton";
import StarCardLink from "@/components/StarPage/StarMain/StarCardLink";
import StarInfo from "@/components/StarPage/StarMain/StarInfo";

import { theme } from "@/styles/theme";

export default function StarMainPage() {
	return (
		<div css={containerStyle}>
			<StarBackground />
			<div className="wrapper">
				<StarInfo starCount={114} starCardId={1} />
				<StarButton />
				<StarCardLink />
			</div>
			<div css={starMainPageGnbStyle}>
				<Gnb />
			</div>
		</div>
	);
}

const containerStyle = css`
	background: linear-gradient(
		#0b0a0b 2%,
		#192771 38%,
		#3e53b3 63%,
		#4166b7 76%,
		#6b8acb 84%,
		#6d68d4 98%
	);

	.wrapper {
		width: 22.5rem;
		height: 100dvh;
		padding: 1.75rem 1.5rem 4.75rem;
		margin: 0 auto;
		position: relative;
	}
`;

const starMainPageGnbStyle = css`
	opacity: 0.5;

	& > div {
		background-color: ${theme.color.font_black};
	}
`;
