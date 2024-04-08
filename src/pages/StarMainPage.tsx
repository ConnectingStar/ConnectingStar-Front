import { css } from "@emotion/react";

import Gnb from "@/components/common/Gnb/Gnb";
import CharacterUnlockModal from "@/components/StarPage/Modal/CharacterUnlockModal";
import StarBackground from "@/components/StarPage/StarMain/StarBackground";
import StarButton from "@/components/StarPage/StarMain/StarButton";
import StarCardLink from "@/components/StarPage/StarMain/StarCardLink";
import StarCharacter from "@/components/StarPage/StarMain/StarCharacter";
import StarInfo from "@/components/StarPage/StarMain/StarInfo";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import { theme } from "@/styles/theme";

export default function StarMainPage() {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	return (
		<div css={containerStyle}>
			<StarBackground />

			<div className="wrapper-top">
				<StarInfo starCount={114} starCardId={1} />
			</div>
			<div className="wrapper-middle">
				<StarCharacter svgData={data} />
			</div>
			<div className="wrapper-bottom">
				<StarButton onClick={() => dispatch(openModal(modalType.CHARACTER_UNLOCK))} />
				<StarCardLink />
			</div>

			<div css={starMainPageGnbStyle}>
				<Gnb />
			</div>

			{modal === modalType.CHARACTER_UNLOCK && <CharacterUnlockModal />}
		</div>
	);
}

const containerStyle = css`
	height: 100dvh;
	background: linear-gradient(
		#0b0a0b 2%,
		#192771 38%,
		#3e53b3 63%,
		#4166b7 76%,
		#6b8acb 84%,
		#6d68d4 98%
	);

	.wrapper-top {
		width: 22.5rem;
		padding: 1.75rem 1.5rem 0;
		margin: 0 auto;
	}

	.wrapper-middle {
		display: flex;
		justify-content: center;
		align-items: center;
		height: calc(100dvh - 20.825rem);
	}

	.wrapper-bottom {
		width: 22.5rem;
		padding: 0 1.5rem 4.75rem;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}
`;

const starMainPageGnbStyle = css`
	opacity: 0.5;

	& > div {
		background-color: ${theme.color.font_black};
	}
`;

// TODO: 테스트를 위한 임시 데이터(추후 삭제 예정)
export const data = {
	fill: "#0176F9",
	stroke: "#fff",
	strokeWidth: 2,
	opacity: 0.6,
	width: 312,
	height: 330,
	viewBox: "-7.5 -12 317 330",
	pathList: [
		"M98 7.6748L153 160.175L296.5 77.6748",
		"M4.5 190.675L153 160.175L163 198.175L150.5 302.675",
		"M163 198.675L267.5 279.675",
	],
	circleList: [
		{
			id: 1,
			cx: 98,
			cy: 7.17,
			r: 6,
			filled: false,
		},
		{
			id: 2,
			cx: 153,
			cy: 160.18,
			r: 6,
			filled: false,
		},
		{
			id: 3,
			cx: 163,
			cy: 198.18,
			r: 6,
			filled: false,
		},
		{
			id: 4,
			cx: 296.5,
			cy: 77.67,
			r: 3.5,
			filled: false,
		},
		{
			id: 5,
			cx: 267.5,
			cy: 279.68,
			r: 3.5,
			filled: false,
		},
		{
			id: 6,
			cx: 150.5,
			cy: 302.68,
			r: 3.5,
			filled: false,
		},
		{
			id: 7,
			cx: 4.5,
			cy: 190.68,
			r: 3.5,
			filled: false,
		},
	],
};
