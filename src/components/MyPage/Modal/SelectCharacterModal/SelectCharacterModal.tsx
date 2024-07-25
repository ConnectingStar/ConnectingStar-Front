import { useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { editProfileImage } from "@/api/user/userThunk";

import type { ConstellationList } from "@/types/user";

import {
	layoutStyle,
	characterWrapperStyle,
	characterBoxStyle,
} from "@/components/MyPage/Modal/SelectCharacterModal/SelectCharacterModal.style";

interface SelectCharacterModalProps {
	prevConstellation: number;
	constellationList: ConstellationList[];
}

const SelectCharacterModal = ({
	prevConstellation,
	constellationList,
}: SelectCharacterModalProps) => {
	const dispatch = useAppDispatch();

	const [selectConstellation, setSelectConstellation] = useState(prevConstellation);

	const handleSelectConstellation = async () => {
		try {
			await dispatch(editProfileImage(String(selectConstellation))).unwrap();
			dispatch(closeModal());
		} catch (error) {
			console.error(error);
		}
	};

	console.log(prevConstellation);
	console.log(constellationList);

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
							css={characterBoxStyle(selectConstellation === constellation.constellationId)}
							onClick={() => setSelectConstellation(constellation.constellationId)}
						/>
					))}
				</div>
				<FooterBtn
					text="선택 완료"
					leftText="취소"
					isPositionStatic
					handleLeftBtnClick={() => dispatch(closeModal())}
					handleBtnClick={handleSelectConstellation}
				/>
			</div>
		</Modal>
	);
};

export default SelectCharacterModal;
