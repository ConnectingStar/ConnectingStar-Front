import { useState } from "react";

import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import LeaveReasonModal from "@/components/MyPage/Withdrawal/LeaveResonModal/LeaveReasonModal";

import { useAppSelector, useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";
import { leaveResonData } from "@/constants/myPageConstants";

import {
	layoutStyle,
	getReasonBoxStyle,
	middleBoxStyle,
	textBoxStyle,
	subTextBoxStyle,
} from "@/components/MyPage/Withdrawal/Withdrawal.style";

const Withdrawal = () => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const [reason, setReason] = useState("탈퇴 이유를 선택해 주세요");

	return (
		<div css={layoutStyle}>
			<h1>어떤 이유로 탈퇴하시나요?</h1>
			<div
				css={getReasonBoxStyle(reason !== "탈퇴 이유를 선택해 주세요")}
				onClick={() => dispatch(openModal(modalType.LEAVE_REASON))}
			>
				<p>{reason}</p>
				<DownArrowIcon />
			</div>

			{leaveResonData.map((data) => (
				<div key={data.title} css={middleBoxStyle}>
					{data.placeholder && data.title === reason && (
						<div css={textBoxStyle}>
							<textarea placeholder={data.placeholder} />
						</div>
					)}

					{data.title === reason && (
						<div css={subTextBoxStyle}>
							<p>{data.subText}</p>
						</div>
					)}
				</div>
			))}

			<button type="button">작별하기</button>

			{modal === modalType.LEAVE_REASON && <LeaveReasonModal changeReason={setReason} />}
		</div>
	);
};

export default Withdrawal;
