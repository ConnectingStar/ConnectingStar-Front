import { Dispatch, SetStateAction, useState } from "react";

import CheckIcon from "@/assets/icon/ic-check.svg?react";

import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { buttonBoxStyle } from "@/components/MyPage/MyInfo/SelectCharacterModal/SelectCharacterModal.style";
import {
	layoutStyle,
	getCheckBoxLabelStyle,
} from "@/components/MyPage/MyInfo/SelectGenderModal/SelectGenderModal.style";

interface selectGenderModalType {
	changeGender: Dispatch<SetStateAction<string>>;
}

const data = [
	{
		id: "male",
		text: "남",
	},
	{
		id: "female",
		text: "여자",
	},
	{
		id: "none",
		text: "선택 안 함",
	},
];

const SelectGenderModal = ({ changeGender }: selectGenderModalType) => {
	const dispatch = useAppDispatch();

	const [checkItem, setCheckItem] = useState("");

	const handleCheckClick = () => {
		changeGender(checkItem);
		dispatch(closeModal());
	};

	return (
		<Modal>
			<div css={layoutStyle}>
				<h1>성별을 선택해 주세요</h1>
				<ul>
					{data.map((data) => (
						<li key={data.id}>
							<input type="checkbox" id={data.id} onChange={() => setCheckItem(data.text)} />
							<label htmlFor={data.id} css={getCheckBoxLabelStyle(checkItem === data.text)}>
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

export default SelectGenderModal;
