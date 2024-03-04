import { Dispatch, SetStateAction } from "react";

import CheckIcon from "@/assets/icon/ic-check.svg?react";

import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import {
	layoutStyle,
	getCheckBoxLabelStyle,
} from "@/components/common/Modal/CommonModal/SelectGenderModal/SelectGenderModal.style";

const sortData = [
	{
		text: "최신순",
	},
	{
		text: "오래된순",
	},
];

const SortModal = ({
	sortOption,
	changeSortOption,
}: {
	sortOption: string;
	changeSortOption: Dispatch<SetStateAction<string>>;
}) => {
	const dispatch = useAppDispatch();

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle(true)}>
				<h1>정렬기준</h1>
				<ul>
					{sortData.map((data) => (
						<li key={data.text}>
							<input
								type="checkbox"
								id={data.text}
								onChange={() => {
									changeSortOption(data.text);
									dispatch(closeModal());
								}}
							/>
							<label htmlFor={data.text} css={getCheckBoxLabelStyle(sortOption === data.text)}>
								{sortOption === data.text && <CheckIcon />}
							</label>
							<p>{data.text}</p>
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
};

export default SortModal;
