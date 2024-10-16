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

interface SortModalProps {
	sortOrder: string;
	handleSortOrder: (sortOrder: string) => void;
}

const SortModal = ({ sortOrder, handleSortOrder }: SortModalProps) => {
	const dispatch = useAppDispatch();

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>정렬기준</h1>
				<ul>
					{sortData.map((data) => (
						<li key={data.text}>
							<label css={getCheckBoxLabelStyle}>
								<input
									type="radio"
									id={data.text}
									checked={sortOrder === data.text}
									onChange={() => {
										handleSortOrder(data.text);
										dispatch(closeModal());
									}}
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

export default SortModal;
