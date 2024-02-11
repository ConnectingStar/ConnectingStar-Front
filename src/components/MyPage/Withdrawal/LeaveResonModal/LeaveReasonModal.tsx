import Modal from "@/components/common/Modal/Modal";
import { leaveResonData } from "@/constants/myPageConstants";

import { layoutStyle } from "@/components/MyPage/Withdrawal/LeaveResonModal/LeaveReasonModal.style";

const LeaveReasonModal = () => {
	return (
		<Modal>
			<div css={layoutStyle}>
				<h1>탈퇴 이유를 선택해 주세요</h1>
				<ul>
					{leaveResonData.map((data) => (
						<li key={data.title}>
							<p>{data.title}</p>
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
};

export default LeaveReasonModal;
