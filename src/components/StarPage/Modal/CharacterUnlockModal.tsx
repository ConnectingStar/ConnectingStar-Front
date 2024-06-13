import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { getStarMain } from "@/api/star/starThunk";

import { PATH } from "@/constants/path";

import { theme } from "@/styles/theme";

interface CharacterUnlockModalProps {
	id: number;
	name: string;
	image: string;
}

export default function CharacterUnlockModal({ id, name, image }: CharacterUnlockModalProps) {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return (
		<Modal>
			<div css={containerStyle}>
				<div css={contentStyle}>
					<img src={image} alt="별자리 캐릭터" />
					<h1>축하합니다!</h1>
					<p>
						{name}이 <br />
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
`;

const contentStyle = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100dvh;

	img {
		width: 13rem;
		height: 13rem;
		border-radius: 15px;
		margin-bottom: 1.25rem;
	}

	h1 {
		margin-bottom: 0.5rem;
		${theme.font.head_a};
		color: ${theme.color.main_blue};
	}

	p {
		color: #fff;
		text-align: center;
	}
`;
