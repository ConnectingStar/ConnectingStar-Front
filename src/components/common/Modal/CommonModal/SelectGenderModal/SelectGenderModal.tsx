import { Dispatch, SetStateAction, useState } from "react";

import CheckIcon from "@/assets/icon/ic-check.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { genderTypeList } from "@/constants/onboarding";

import {
	layoutStyle,
	getCheckBoxLabelStyle,
} from "@/components/common/Modal/CommonModal/SelectGenderModal/SelectGenderModal.style";

const SelectGenderModal = ({
	changeGender,
}: {
	changeGender: Dispatch<SetStateAction<string>>;
}) => {
	const dispatch = useAppDispatch();

	const [checkedItem, setCheckedItem] = useState("");

	const handleCheckClick = () => {
		changeGender(checkedItem);
		dispatch(closeModal());
	};

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle()}>
				<h1>성별을 선택해 주세요</h1>
				<ul>
					{genderTypeList.map((data) => (
						<li key={data.code}>
							<input type="checkbox" id={data.text} onChange={() => setCheckedItem(data.text)} />
							<label htmlFor={data.text} css={getCheckBoxLabelStyle(checkedItem === data.text)}>
								{checkedItem === data.text && <CheckIcon />}
							</label>
							<p>{data.text}</p>
						</li>
					))}
				</ul>

				<FooterBtn
					text="확인"
					leftText="취소"
					isPositionStatic
					handleBtnClick={handleCheckClick}
					handleLeftBtnClick={() => dispatch(closeModal())}
				/>
			</div>
		</Modal>
	);
};

export default SelectGenderModal;
