import { useNavigate } from "react-router-dom";

import Lottie from "lottie-react";

import ClapAnimation from "@/assets/lottie/lottie-clap-animation.json";
import StarMedalAnimation from "@/assets/lottie/lottie-star-medal-animation.json";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { STAR_PRAIZE_TEXT_DATA } from "@/constants/homeConstants";
import { PATH } from "@/constants/path";

import {
	containerStyle,
	imageWrapperStyle,
	prizeCommentStyle,
} from "@/components/Habit/Modal/StarPrizeModal/StarPrizeModal.style";

interface StarPrizeModalProps {
	isHabitStart?: boolean;
	achiveStatus?: string;
	identity?: string;
}

function StarPrizeModal({ isHabitStart, achiveStatus, identity }: StarPrizeModalProps) {
	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	return (
		<Modal isBackdropClose={false}>
			{STAR_PRAIZE_TEXT_DATA.map(
				(data) =>
					data.id === achiveStatus && (
						<div css={containerStyle} key={data.id}>
							<span css={imageWrapperStyle}>
								<Lottie
									animationData={isHabitStart ? StarMedalAnimation : ClapAnimation}
									loop={false}
								/>
							</span>
							<div css={prizeCommentStyle}>
								<div>
									<span>{data.blueText}</span>
									{isHabitStart && <span>{data.yellowText}</span>}
								</div>
								<div>
									<span>
										{data.id === "enough" && "정체성 "}
										{identity}
										{data.comment}
									</span>
								</div>
							</div>
							<FooterBtn
								leftText={isHabitStart ? "홈으로" : "홈 탐색하기"}
								text={isHabitStart ? "별자리 채우기" : "별자리로 가기"}
								handleLeftBtnClick={() => {
									navigate(PATH.HOME);
									dispatch(closeModal());
								}}
								handleBtnClick={() => {
									navigate(PATH.STAR);
									dispatch(closeModal());
								}}
								isTransparent
							/>
						</div>
					),
			)}
		</Modal>
	);
}

export default StarPrizeModal;
