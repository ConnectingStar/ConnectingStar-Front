import { css } from "@emotion/react";

import StarImage from "@/assets/image/card-detail-star.png";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { prizeCommentsArray } from "@/constants/habitRecordConstants";

import { theme } from "@/styles/theme";

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
						<span>{target.HABIT_RECORD_BLUE_TEXT}</span>
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

export const containerStyle = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	width: 22.5rem;
	height: 100vh;
`;

export const imageWrapperStyle = css`
	border-radius: 15px;
	img {
		width: 13rem;
		height: 13rem;
		object-fit: contain;
	}
`;

export const prizeCommentStyle = css`
	white-space: pre-wrap;
	text-align: center;

	& > :first-of-type {
		${theme.font.head_a};
		margin-bottom: 0.5rem;
		color: ${theme.color.main_blue};
		.yellow {
			color: ${theme.color.main_yellow};
		}
	}

	& > :nth-of-type(2) {
		${theme.font.body_a};
		color: white;
	}
`;
