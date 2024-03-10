import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import { css } from "@emotion/react";

import InfoIcon from "@/assets/icon/infomation.svg"; // SVG 파일을 가져옵니다.

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { isValidateNickName } from "@/hooks/isValidateNickName";

import { theme } from "@/styles/theme";

// 이모지 판별을 위한 정규식
const emojiRegex = /\p{Extended_Pictographic}/u;

const ChangeNicknameModal = ({
	changeNickname,
}: {
	changeNickname: Dispatch<SetStateAction<string>>;
}) => {
	const dispatch = useAppDispatch();

	const [nickname, setNickname] = useState("");
	const [informationMessage, setInformationMessage] =
		useState("8자 제한, 띄어쓰기 불가, 이모티콘 불가");
	const [isError, setIsError] = useState(false);

	const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
		let input = e.target.value;

		// 띄어쓰기 작성 막기
		input = input.replace(/\s+/g, "");

		// 8자이상 입력 막기
		setNickname(input.slice(0, 8));

		if (!isValidateNickName(input)) {
			setIsError(true);
			if (emojiRegex.test(input)) {
				setInformationMessage("이모티콘은 사용할 수 없어요!");
			} else {
				setInformationMessage("8자 제한, 띄어쓰기 불가, 이모티콘 불가");
			}
		} else {
			setIsError(false);
			setInformationMessage("8자 제한, 띄어쓰기 불가, 이모티콘 불가");
		}
	};

	const handleChangeInput = () => {
		if (isValidateNickName(nickname)) {
			changeNickname(nickname);
			dispatch(closeModal());
		}
	};

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle(isError)}>
				<h1>닉네임을 입력해 주세요</h1>
				<input
					placeholder="닉네임을 입력해 주세요"
					value={nickname}
					onChange={(e) => handleNicknameChange(e)}
				/>
				<div css={infoStyle(isError)}>
					{informationMessage === "8자 제한, 띄어쓰기 불가, 이모티콘 불가" && (
						<img src={InfoIcon} alt="info icon" />
					)}
					<p>{informationMessage}</p>
				</div>
			</div>

			<FooterBtn
				text="확인"
				leftText="취소"
				handleBtnClick={handleChangeInput}
				handleLeftBtnClick={() => dispatch(closeModal())}
				isSquare
				disabled={isError || nickname.trim().length === 0}
			/>
		</Modal>
	);
};

export default ChangeNicknameModal;

const layoutStyle = (isError: boolean) => css`
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
		border: 1px solid ${isError ? "red" : "none"};
		box-sizing: border-box;
		width: 100%;
		height: 3.4375rem;
		border-radius: 15px;
		padding: 1rem;
		margin-top: 1.6875rem;
		background-color: ${theme.color.bg};
		color: ${theme.color.font_black};
	}
`;
const infoStyle = (isError: boolean) => css`
	display: flex;
	align-items: center;
	${theme.font.body_c}
	margin-top: 8px;
	color: ${isError ? "red" : `${theme.color.font_gray}`};
	gap: 0.25rem;
`;
