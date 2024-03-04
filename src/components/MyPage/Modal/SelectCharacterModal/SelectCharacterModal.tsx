import { useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import {
	layoutStyle,
	characterWrapperStyle,
	getCharacterBoxStyle,
} from "@/components/MyPage/Modal/SelectCharacterModal/SelectCharacterModal.style";

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const SelectCharacterModal = () => {
	const dispatch = useAppDispatch();

	const [isSelect, setIsSelect] = useState(1);

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>캐릭터를 선택해 주세요</h1>
				<div css={characterWrapperStyle}>
					{count.map((index) => (
						<div
							key={index}
							css={getCharacterBoxStyle(isSelect === index)}
							onClick={() => setIsSelect(index)}
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
