import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { theme } from "@/styles/theme";

export default function CharacterUnlockModal() {
	const dispatch = useAppDispatch();

	return (
		<Modal>
			<div css={containerStyle}>
				<div css={contentStyle}>
					{/* TODO: 이미지는 API 연결 후 추가될 예정 */}
					<img src="" alt="별자리 캐릭터" />
					<h1>축하합니다!</h1>
					<p>
						[캐릭터이름]이 <br />
						당신의 친구가 되었어요!
					</p>
				</div>
				<FooterBtn
					text="확인하러 가기"
					leftText="닫기"
					isTransparent
					handleLeftBtnClick={() => dispatch(closeModal())}
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

	/* TODO: 이미지 추가되면 background-color 삭제 예정 */
	img {
		width: 13rem;
		height: 13rem;
		border-radius: 15px;
		margin-bottom: 1.25rem;
		background-color: #d9d9d9;
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
