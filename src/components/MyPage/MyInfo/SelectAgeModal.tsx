import { Dispatch, SetStateAction, useState } from "react";

import CheckIcon from "@/assets/icon/ic-check.svg?react";

import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { selectAgeData } from "@/constants/myPageConstants";

import { buttonBoxStyle } from "@/components/MyPage/MyInfo/SelectCharacterModal/SelectCharacterModal.style";
import {
	layoutStyle,
	getCheckBoxLabelStyle,
} from "@/components/MyPage/MyInfo/SelectGenderModal/SelectGenderModal.style";

const SelectAgeModal = ({ changeAge }: { changeAge: Dispatch<SetStateAction<string>> }) => {
	const dispatch = useAppDispatch();

	const [checkItem, setCheckItem] = useState("");

	const handleCheckClick = () => {
		changeAge(checkItem);
		dispatch(closeModal());
	};

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>나이대를 선택해 주세요</h1>
				<ul>
					{selectAgeData.map((data) => (
						<li key={data.text}>
							<input type="checkbox" id={data.text} onChange={() => setCheckItem(data.text)} />
							<label htmlFor={data.text} css={getCheckBoxLabelStyle(checkItem === data.text)}>
								{checkItem === data.text && <CheckIcon />}
							</label>
							<p>{data.text}</p>
						</li>
					))}
				</ul>

				<div css={buttonBoxStyle}>
					<button className="cancel" onClick={() => dispatch(closeModal())}>
						취소
					</button>
					<button onClick={handleCheckClick}>확인</button>
				</div>
			</div>
		</Modal>
	);
};

export default SelectAgeModal;
