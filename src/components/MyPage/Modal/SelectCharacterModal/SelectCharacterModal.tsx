import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import type { ConstellationList } from "@/types/user";

import {
	layoutStyle,
	characterWrapperStyle,
	characterBoxStyle,
} from "@/components/MyPage/Modal/SelectCharacterModal/SelectCharacterModal.style";

interface SelectCharacterModalProps {
	constellationList: ConstellationList[];
}

const SelectCharacterModal = ({ constellationList }: SelectCharacterModalProps) => {
	const dispatch = useAppDispatch();

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>버디를 선택해 주세요</h1>
				<div css={characterWrapperStyle}>
					{constellationList.map((constellation) => (
						<img
							src={constellation.imageUrl}
							alt={`image${constellation.constellationId}`}
							key={constellation.constellationId}
							css={characterBoxStyle(true)}
						/>
					))}
				</div>
				<FooterBtn
					text="선택 완료"
					leftText="취소"
					isPositionStatic
					handleLeftBtnClick={() => dispatch(closeModal())}
					handleBtnClick={() => dispatch(closeModal())}
				/>
			</div>
		</Modal>
	);
};

export default SelectCharacterModal;
