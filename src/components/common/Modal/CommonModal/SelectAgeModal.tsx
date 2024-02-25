import { Dispatch, SetStateAction, useState } from "react";

import CheckIcon from "@/assets/icon/ic-check.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { selectAgeData } from "@/constants/myPageConstants";

import {
	layoutStyle,
	getCheckBoxLabelStyle,
} from "@/components/common/Modal/CommonModal/SelectGenderModal/SelectGenderModal.style";

const SelectAgeModal = ({ changeAge }: { changeAge: Dispatch<SetStateAction<string>> }) => {
	const dispatch = useAppDispatch();

	const [checkItem, setCheckItem] = useState("");

	const handleCheckClick = () => {
		changeAge(checkItem);
		dispatch(closeModal());
	};

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle()}>
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

				<FooterBtn
					text="확인"
					leftText="취소"
					handleBtnClick={handleCheckClick}
					handleLeftBtnClick={() => dispatch(closeModal())}
				/>
			</div>
		</Modal>
	);
};

export default SelectAgeModal;
