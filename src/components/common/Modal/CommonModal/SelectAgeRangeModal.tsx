import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { editAge } from "@/api/user/userThunk";

import { ageRangeTypeList } from "@/constants/onboarding";

import { generateAge } from "@/utils/generateRangeType";

import type { UserInfoType } from "@/types/userDataType";

import {
	layoutStyle,
	getCheckBoxLabelStyle,
} from "@/components/common/Modal/CommonModal/SelectGenderModal/SelectGenderModal.style";

interface SelectAgeModalProps {
	prevAgeRange?: string;
	updateInputValue?: <Key extends keyof UserInfoType>(key: Key, value: UserInfoType[Key]) => void;
}

const SelectAgeRangeModal = ({ prevAgeRange, updateInputValue }: SelectAgeModalProps) => {
	const dispatch = useAppDispatch();

	const handleChangeAgeRange = (ageRange: string) => {
		updateInputValue
			? updateInputValue("ageRangeType", ageRange)
			: dispatch(editAge(generateAge(ageRange)));
		dispatch(closeModal());
	};

	console.log(prevAgeRange);

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>나이대를 선택해 주세요</h1>
				<ul>
					{ageRangeTypeList.map((data) => (
						<li key={data.code}>
							<label css={getCheckBoxLabelStyle}>
								<input
									type="radio"
									id={data.text}
									checked={prevAgeRange === data.text}
									onChange={() => handleChangeAgeRange(data.text)}
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

export default SelectAgeRangeModal;
