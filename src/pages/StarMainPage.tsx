import { css } from "@emotion/react";

import Gnb from "@/components/common/Gnb/Gnb";
import CharacterUnlockModal from "@/components/StarPage/Modal/CharacterUnlockModal";
import StarBackground from "@/components/StarPage/StarMain/StarBackground";
import StarButton from "@/components/StarPage/StarMain/StarButton";
import StarCardLink from "@/components/StarPage/StarMain/StarCardLink";
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
			<div className="wrapper">
				<StarInfo starCount={114} starCardId={1} />
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
