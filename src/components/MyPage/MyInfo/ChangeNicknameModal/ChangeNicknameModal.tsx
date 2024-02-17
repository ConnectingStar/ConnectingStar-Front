import { Dispatch, SetStateAction, useState } from "react";

import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import {
	layoutStyle,
	buttonBoxStyle,
} from "@/components/MyPage/MyInfo/ChangeNicknameModal/ChangeNicknameModal.style";

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

			<div css={buttonBoxStyle}>
				<button className="cancel" onClick={() => dispatch(closeModal())}>
					취소
				</button>
				<button onClick={handleChangeInput}>확인</button>
			</div>
		</Modal>
	);
};

export default ChangeNicknameModal;
