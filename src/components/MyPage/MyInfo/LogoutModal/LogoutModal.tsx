import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import {
	layoutStyle,
	buttonBoxStyle,
} from "@/components/MyPage/MyInfo/LogoutModal/LogoutModal.style";

const LogoutModal = () => {
	const dispatch = useAppDispatch();

	return (
		<Modal>
			<div css={layoutStyle}>
				<h1>로그아웃 할까요?</h1>

				<div css={buttonBoxStyle}>
					<button className="cancel" onClick={() => dispatch(closeModal())}>
						취소
					</button>
					<button>로그아웃</button>
				</div>
			</div>
		</Modal>
	);
};

export default LogoutModal;
