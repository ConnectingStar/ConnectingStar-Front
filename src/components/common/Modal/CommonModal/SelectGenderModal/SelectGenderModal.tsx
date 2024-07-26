import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { editGender } from "@/api/user/userThunk";

import { genderTypeList } from "@/constants/onboarding";

import { generateGender } from "@/utils/generateRangeType";

import {
	layoutStyle,
	getCheckBoxLabelStyle,
} from "@/components/common/Modal/CommonModal/SelectGenderModal/SelectGenderModal.style";

interface SelectGenderModalProps {
	prevGender?: string;
	changeGender?: (gender: string) => void;
}

const SelectGenderModal = ({ prevGender, changeGender }: SelectGenderModalProps) => {
	const dispatch = useAppDispatch();

	const handleChangeGender = (gender: string) => {
		changeGender ? changeGender(gender) : dispatch(editGender(generateGender(gender)));
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
