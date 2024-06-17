import CheckIcon from "@/assets/icon/ic-check.svg?react";

import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { editAge } from "@/api/user/userThunk";

import { ageRangeTypeList } from "@/constants/onboarding";

import { generateAge } from "@/utils/generateRangeType";

import {
	layoutStyle,
	getCheckBoxLabelStyle,
} from "@/components/common/Modal/CommonModal/SelectGenderModal/SelectGenderModal.style";

interface SelectAgeModalProps {
	prevAgeRange?: string;
	changeAgeRange?: (age: string) => void;
}

const SelectAgeRangeModal = ({ prevAgeRange, changeAgeRange }: SelectAgeModalProps) => {
	const dispatch = useAppDispatch();

	const handleChangeAgeRange = (ageRange: string) => {
		changeAgeRange ? changeAgeRange(ageRange) : dispatch(editAge(generateAge(ageRange)));
		dispatch(closeModal());
	};

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle()}>
				<h1>나이대를 선택해 주세요</h1>
				<ul>
					{ageRangeTypeList.map((data) => (
						<li key={data.code}>
							<input type="radio" id={data.text} onChange={() => handleChangeAgeRange(data.text)} />
							<label htmlFor={data.text} css={getCheckBoxLabelStyle(prevAgeRange === data.text)}>
								{prevAgeRange === data.text && <CheckIcon />}
							</label>
							<p>{data.text}</p>
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
};

export default SelectAgeRangeModal;
