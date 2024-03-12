import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import { css } from "@emotion/react";

import InfoIcon from "@/assets/icon/infomation.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { theme } from "@/styles/theme";

// 이모지 판별을 위한 정규식
const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u27FF]/g;

const ChangeNicknameModal = ({
	changeNickname,
}: {
	changeNickname: Dispatch<SetStateAction<string>>;
}) => {
	const dispatch = useAppDispatch();

	const [nickname, setNickname] = useState("");

	const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
		let input = e.target.value;

		// 띄어쓰기 작성 막기
		input = input.replace(/\s+/g, "");
		// 이모지 작성 막기
		input = input.replace(emojiRegex, "");

		// 8자이상 입력 막기
		setNickname(input);
	};

	const handleChangeInput = () => {
		changeNickname(nickname);
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
				handleBtnClick={handleChangeInput}
				handleLeftBtnClick={() => dispatch(closeModal())}
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
