import { useParams } from "react-router-dom";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";
// NOTE: 마이페이지 로그아웃 모달과 구조, 스타일 동일함
import { layoutStyle } from "@/components/MyPage/Modal/LogoutModal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { editProfileImage } from "@/api/user/userThunk";

import { useToast } from "@/hooks/useToast";

export default function SelectProfileCharacterModal() {
	const { id } = useParams();
	const { createToast } = useToast();
	const dispatch = useAppDispatch();

	const handleFooterBtnClick = async () => {
		try {
			await dispatch(editProfileImage(id ?? "")).unwrap();
			dispatch(closeModal());
			createToast("프로필 이미지로 설정 되었어요!");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Modal>
			<div css={layoutStyle}>
				<h1>프로필 이미지로 설정할까요?</h1>
				<FooterBtn
					text="확인"
					leftText="취소"
					handleBtnClick={handleFooterBtnClick}
					handleLeftBtnClick={() => dispatch(closeModal())}
					isPositionStatic
				/>
			</div>
		</Modal>
	);
}
