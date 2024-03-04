import { Dispatch, SetStateAction, useState } from "react";

import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { theme } from "@/styles/theme";

const ChangeNicknameModal = ({
	changeNickname,
}: {
	changeNickname: Dispatch<SetStateAction<string>>;
}) => {
	const dispatch = useAppDispatch();

	const [nickname, setNickname] = useState("");

	const handleChangeInput = () => {
		changeNickname(nickname);
		dispatch(closeModal());
	};

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>닉네임 수정</h1>
				<input
					placeholder="닉네임"
					value={nickname}
					onChange={(e) => setNickname(e.target.value)}
				/>
			</div>

			<FooterBtn
				text="확인"
				leftText="취소"
				handleBtnClick={handleChangeInput}
				handleLeftBtnClick={() => dispatch(closeModal())}
				isSquare
			/>
		</Modal>
	);
};

export default ChangeNicknameModal;

const layoutStyle = css`
	padding: 1.125rem 1.5rem 4.4375rem;
	border-radius: 15px 15px 0 0;
	color: ${theme.color.font_black};
	background-color: #fff;

	& > h1 {
		color: ${theme.color.font_black};
		${theme.font.header};
	}

	& > input {
		all: unset;
		box-sizing: border-box;
		width: 100%;
		height: 3.4375rem;
		border-radius: 15px;
		margin-top: 1.6875rem;
		background-color: ${theme.color.bg};
		color: ${theme.color.font_black};
		padding: 1rem;
	}
`;
