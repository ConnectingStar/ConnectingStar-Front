import { useState } from "react";

import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import DeleteReasonModal from "@/components/Home/HabitDelete/DeleteReasonModal/DeleteReasonModal";

import { useAppSelector, useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { deleteReasonData } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";

import {
	layoutStyle,
	getReasonBoxStyle,
	middleBoxStyle,
	textBoxStyle,
	subTextBoxStyle,
} from "@/components/Home/HabitDelete/HabitDelete.style";

const HabitDelete = () => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const [reason, setReason] = useState("그만두는 이유를 선택해 주세요");

	return (
		<div css={layoutStyle}>
			<h1>어떤 이유로 그만두시나요?</h1>
			<div
				css={getReasonBoxStyle(reason !== "그만두는 이유를 선택해 주세요")}
				onClick={() => dispatch(openModal(modalType.DELETE_REASON))}
			>
				<p>{reason}</p>
				<DownArrowIcon />
			</div>

			{deleteReasonData.map((data) => (
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

			<FooterBtn
				text="그만두기"
				isTransparent
				disabled={reason === "그만두는 이유를 선택해 주세요"}
			/>

			{modal === modalType.DELETE_REASON && <DeleteReasonModal changeReason={setReason} />}
		</div>
	);
};

export default HabitDelete;
