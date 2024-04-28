import { useNavigate } from "react-router-dom";

import ClapAnimation from "@/assets/lottie/lottie-clap-animation.json";
import StarMedalAnimation from "@/assets/lottie/lottie-star-medal-animation.json";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";
import Lottie from "lottie-react";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import {
	containerStyle,
	imageWrapperStyle,
	prizeCommentStyle,
} from "@/components/Home/Landing/Modal/StarPrizeModal/StarPrizeModal.style";

interface StarPrizeModalProps {
	isHabitStart?: boolean;
	blueText: string;
	yellowText?: string;
	comment: string;
}

function StarPrizeModal({ isHabitStart, blueText, comment, yellowText }: StarPrizeModalProps) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	return (
		<Modal>
			<div css={containerStyle} onClick={() => dispatch(closeModal())}>
				<span css={imageWrapperStyle}>
					<Lottie animationData={isHabitStart ? StarMedalAnimation : ClapAnimation} loop={false} />
				</span>
				<div css={prizeCommentStyle}>
					<div>
						<span>{blueText}</span>
						{isHabitStart && <span>{yellowText}</span>}
					</div>
					<div>
						<span>{comment}</span>
					</div>
				</div>
				<FooterBtn
					leftText={isHabitStart ? "홈으로" : "홈 탐색하기"}
					text={isHabitStart ? "별자리 채우기" : "별자리로 가기"}
					handleLeftBtnClick={() => {
						navigate("/");
						dispatch(closeModal());
					}}
					handleBtnClick={() => {
						navigate("/star");
						dispatch(closeModal());
					}}
					isTransparent
				/>
			</div>
		</Modal>
	);
}

export default StarPrizeModal;
