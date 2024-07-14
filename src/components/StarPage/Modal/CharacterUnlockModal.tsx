import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import { useLottie } from "lottie-react";

import StarBurstAnimation from "@/assets/lottie/lottie-star-burst-animation.json";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { getStarMain } from "@/api/star/starThunk";

import { PATH } from "@/constants/path";

import { theme } from "@/styles/theme";

import { josaIga } from "@/utils/starUtils";

interface CharacterUnlockModalProps {
	id: number;
	name: string;
	image: string;
}

const options = {
	animationData: StarBurstAnimation,
	loop: false,
};

const style: React.CSSProperties = {
	position: "absolute",
	top: "-3%",
	left: "10%",
	transform: "scale(5)",
};

export default function CharacterUnlockModal({ id, name, image }: CharacterUnlockModalProps) {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { View: StarBurstLottie, setSpeed } = useLottie(options, style);

	useEffect(() => {
		setSpeed(0.7);
	}, []);

	return (
		<Modal isFadeIn isBackdropClose={false}>
			<div css={containerStyle}>
				<div css={contentStyle}>
					<div css={imageStyle}>
						{StarBurstLottie}
						<img src={image} alt="별자리 캐릭터" />
					</div>
					<h1>축하합니다🎉</h1>
					<p>
						<span>{name}</span>
						{josaIga(name)} <br />
						당신의 친구가 되었어요!
					</p>
				</div>
				<FooterBtn
					text="확인하러 가기"
					leftText="닫기"
					isTransparent
					handleBtnClick={() => navigate(`${PATH.STAR_CARD}/${id}`)}
					handleLeftBtnClick={() => {
						dispatch(getStarMain());
						dispatch(closeModal());
					}}
				/>
			</div>
		</Modal>
	);
}

const containerStyle = css`
	width: 22.5rem;
	position: relative;
	overflow: hidden;
`;

const contentStyle = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100dvh;

	h1 {
		margin-bottom: 0.5rem;
		${theme.font.head_a};
		color: ${theme.color.main_blue};
	}

	p {
		color: #fff;
		text-align: center;
	}

	span {
		color: #ffbb00;
		${theme.font.body_a_bold}
	}
`;

const imageStyle = css`
	margin-bottom: 1.25rem;
	position: relative;

	img {
		width: 13rem;
		height: 13rem;
		border-radius: 15px;
	}
`;
