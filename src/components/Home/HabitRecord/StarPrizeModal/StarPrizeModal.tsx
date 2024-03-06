import StarImage from "@/assets/image/card-detail-star.png";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { prizeCommentsArray } from "@/constants/habitRecordConstants";

import {
	imageWrapperStyle,
	prizeCommentStyle,
	containerStyle,
} from "@/components/Home/HabitRecord/StarPrizeModal/StarPrizeModal.style";

function StarPrizeModal() {
	const dispatch = useAppDispatch();
	// 임시로 랜덤요소를 통해 멘트에 변화를 주고 있음. 나중에 api 추가되면 수정할 예정
	const Random = Math.floor(Math.random() * 10) % prizeCommentsArray.length;
	const target = prizeCommentsArray[Random];

	return (
		<Modal>
			<div css={containerStyle} onClick={() => dispatch(closeModal())}>
				<span css={imageWrapperStyle}>
					<img src={StarImage} alt="임시" />
				</span>
				<article css={prizeCommentStyle}>
					<div>
						<span className="blue">{target.HABIT_RECORD_BLUE_TEXT}</span>
						<span className="yellow">{target.HABIT_RECORD_YELLOW_TEXT}</span>
					</div>
					<div>
						<span>{target.HABIT_RECORD_WHITE_TEXT}</span>
					</div>
				</article>
				<FooterBtn leftText="홈으로" text="별자리 채우기" isTransparent />
			</div>
		</Modal>
	);
}

export default StarPrizeModal;
