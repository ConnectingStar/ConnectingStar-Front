import { useState } from "react";

import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import {
	layoutStyle,
	characterWrapperStyle,
	getCharacterBoxStyle,
	buttonBoxStyle,
} from "@/components/MyPage/MyInfo/SelectCharacterModal/SelectCharacterModal.style";

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const SelectCharacterModal = () => {
	const dispatch = useAppDispatch();

	const [isSelect, setIsSelect] = useState(1);

	return (
		<Modal>
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
				<div css={buttonBoxStyle}>
					<button type="button" className="cancel" onClick={() => dispatch(closeModal())}>
						취소
					</button>
					<button type="button" onClick={() => dispatch(closeModal())}>
						선택 완료
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default SelectCharacterModal;
