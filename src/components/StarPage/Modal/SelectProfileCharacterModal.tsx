import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";
// NOTE: 마이페이지 로그아웃 모달과 구조, 스타일 동일함
import { layoutStyle } from "@/components/MyPage/Modal/LogoutModal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

export default function SelectProfileCharacterModal() {
	const dispatch = useAppDispatch();

	return (
		<Modal>
			<div css={layoutStyle}>
				<h1>프로필 캐릭터로 설정할까요?</h1>

				<FooterBtn
					text="확인"
					leftText="취소"
					handleLeftBtnClick={() => dispatch(closeModal())}
					isPositionStatic
				/>
			</div>
		</Modal>
	);
}
