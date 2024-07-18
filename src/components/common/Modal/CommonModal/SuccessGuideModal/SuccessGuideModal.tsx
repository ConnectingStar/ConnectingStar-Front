import { useNavigate } from "react-router-dom";

import Lottie from "lottie-react";

import ClapAnimation from "@/assets/lottie/lottie-clap-animation.json";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { PATH } from "@/constants/path";

import {
	containerStyle,
	imageWrapperStyle,
	prizeCommentStyle,
} from "@/components/Habit/Modal/HabitRecordAchieveModal/HabitRecordAchieveModal.style";

interface SuccessGuideModalProps {
	title: string;
	content: string;
}

const SuccessGuideModal = ({ title, content }: SuccessGuideModalProps) => {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	return (
		<Modal isBackdropClose={false}>
			<div css={containerStyle}>
				<span css={imageWrapperStyle}>
					<Lottie animationData={ClapAnimation} loop={false} />
				</span>
				<div css={prizeCommentStyle}>
					<div>
						<span>{title}</span>
					</div>
					<div>
						<span>{content}</span>
					</div>
				</div>
				<FooterBtn
					leftText="홈 탐색하기"
					text="별자리로 가기"
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
		</Modal>
	);
};

export default SuccessGuideModal;
