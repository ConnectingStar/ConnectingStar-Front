import StarImage from "@/assets/image/img-card-detail-star.png";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import {
	containerStyle,
	imageWrapperStyle,
	prizeCommentStyle,
} from "@/components/Home/Landing/Modal/StarPrizeModal/StarPrizeModal.style";

interface StarPrizeModalProps {
	version: "ver1" | "ver2";
	blueText: string;
	yellowText?: string;
	comment: string;
}

function StarPrizeModal({ version, blueText, comment, yellowText }: StarPrizeModalProps) {
	const dispatch = useAppDispatch();
	return (
		<Modal>
			<div css={containerStyle} onClick={() => dispatch(closeModal())}>
				<span css={imageWrapperStyle}>
					<img src={StarImage} alt="prizeImage" />
				</span>
				<div css={prizeCommentStyle}>
					<div>
						<span>{blueText}</span>
						{version === "ver1" && <span className="yellow">{yellowText}</span>}
					</div>
					<div>
						<span>{comment}</span>
					</div>
				</div>
				<FooterBtn
					leftText={`${version === "ver1" ? "홈으로" : "홈 탐색하기"}`}
					text={`${version === "ver1" ? "별자리 채우기" : "별자리로 가기"}`}
					isTransparent
				/>
			</div>
		</Modal>
	);
}

export default StarPrizeModal;
