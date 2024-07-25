import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { editGender } from "@/api/user/userThunk";

import { genderTypeList } from "@/constants/onboarding";

import { generateGender } from "@/utils/generateRangeType";

import type { UserInfoType } from "@/types/userDataType";

import {
	layoutStyle,
	getCheckBoxLabelStyle,
} from "@/components/common/Modal/CommonModal/SelectGenderModal/SelectGenderModal.style";

interface SelectGenderModalProps {
	prevGender?: string;
	updateInputValue?: <Key extends keyof UserInfoType>(key: Key, value: UserInfoType[Key]) => void;
}

const SelectGenderModal = ({ prevGender, updateInputValue }: SelectGenderModalProps) => {
	const dispatch = useAppDispatch();

	const handleChangeGender = (gender: string) => {
		updateInputValue
			? updateInputValue("genderType", gender)
			: dispatch(editGender(generateGender(gender)));
		dispatch(closeModal());
	};

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>성별을 선택해 주세요</h1>
				<ul>
					{genderTypeList.map((data) => (
						<li key={data.code}>
							<label css={getCheckBoxLabelStyle}>
								<input
									type="radio"
									id={data.text}
									checked={prevGender === data.text}
									onChange={() => handleChangeGender(data.text)}
								/>
								<p>{data.text}</p>
							</label>
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
};

export default SelectGenderModal;
