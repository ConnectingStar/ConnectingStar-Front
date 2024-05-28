import { ChangeEvent, useState } from "react";

import { css } from "@emotion/react";

import InfoIcon from "@/assets/icon/ic-information.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { editNickname } from "@/api/user/userThunk";

import { theme } from "@/styles/theme";

import isValidNickname from "@/utils/isValidNickname";

interface ChangeNicknameModalProps {
	prevNickname?: string;
	changeNickname?: (nickname: string) => void;
}

const ChangeNicknameModal = ({ prevNickname, changeNickname }: ChangeNicknameModalProps) => {
	const dispatch = useAppDispatch();

	const [nickname, setNickname] = useState(prevNickname ?? "");

	const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;

		if (isValidNickname(input) || input === "") {
			setNickname(input);
		}
	};

	const handleChangeNickname = () => {
		dispatch(editNickname(nickname));
		dispatch(closeModal());
	};

	const handleChangeInput = () => {
		changeNickname && changeNickname(nickname);
		dispatch(closeModal());
	};

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>닉네임을 입력해 주세요</h1>
				<input
					placeholder="닉네임을 입력해 주세요"
					value={nickname}
					onChange={(e) => handleNicknameChange(e)}
					maxLength={8}
				/>
				<div>
					<InfoIcon />
					<p>8자 제한, 띄어쓰기 불가, 이모티콘 불가</p>
				</div>
			</div>

			<FooterBtn
				text="확인"
				leftText="취소"
				handleBtnClick={prevNickname ? handleChangeNickname : handleChangeInput}
				handleLeftBtnClick={() => dispatch(closeModal())}
				disabled={nickname.trim().length === 0}
				isSquare
			/>
		</Modal>
	);
};

export default ChangeNicknameModal;

const layoutStyle = css`
	border-radius: 15px 15px 0 0;
	padding: 1.125rem 1.5rem 4.4375rem;
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
		padding: 1rem;
		margin: 1.6875rem 0 0.5rem;
		background-color: ${theme.color.bg};
		color: ${theme.color.font_black};
	}

	& > div {
		display: flex;
		align-items: center;
		gap: 2.5px;
		${theme.font.body_c}
		color: ${theme.color.font_gray}
	}
`;
