import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import { css } from "@emotion/react";

import InfoIcon from "@/assets/icon/ic-information.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { theme } from "@/styles/theme";

// 이모지 판별을 위한 정규식
const emojiRegex =
	/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

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
