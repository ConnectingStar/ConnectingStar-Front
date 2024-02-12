import { Dispatch, SetStateAction } from "react";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import Modal from "@/components/common/Modal/Modal";
import { leaveResonData } from "@/constants/myPageConstants";

import { layoutStyle } from "@/components/MyPage/Withdrawal/LeaveResonModal/LeaveReasonModal.style";

interface test {
	changeReason: Dispatch<SetStateAction<string>>;
}

const LeaveReasonModal = ({ changeReason }: test) => {
	const dispatch = useAppDispatch();

	const handleReasonClick = (reason: string) => {
		changeReason(reason);
		dispatch(closeModal());
	};

	return (
		<Modal>
			<div css={layoutStyle}>
				<h1>탈퇴 이유를 선택해 주세요</h1>
				<ul>
					{leaveResonData.map((data) => (
						<li key={data.title} onClick={() => handleReasonClick(data.title)}>
							<p>{data.title}</p>
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
};

export default LeaveReasonModal;
