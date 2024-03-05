import { Dispatch, SetStateAction } from "react";

import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { deleteReasonData } from "@/constants/homeConstants";

import { layoutStyle } from "@/components/Home/HabitDelete/DeleteReasonModal/DeleteReasonModal.style";

const DeleteReasonModal = ({
	changeReason,
}: {
	changeReason: Dispatch<SetStateAction<string>>;
}) => {
	const dispatch = useAppDispatch();

	const handleReasonClick = (reason: string) => {
		changeReason(reason);
		dispatch(closeModal());
	};

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>그만두는 이유를 선택해 주세요</h1>
				<ul>
					{deleteReasonData.map((data) => (
						<li key={data.title} onClick={() => handleReasonClick(data.title)}>
							<p>{data.title}</p>
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
};

export default DeleteReasonModal;
