import { useState } from "react";

import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import DeleteReasonModal from "@/components/Home/DeleteReasonModal/DeleteReasonModal";
import LeaveReasonModal from "@/components/MyPage/Modal/LeaveResonModal/LeaveReasonModal";

import { useAppSelector, useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import {
	layoutStyle,
	getReasonBoxStyle,
	middleBoxStyle,
	textBoxStyle,
	subTextBoxStyle,
} from "@/components/common/CommonDelete/CommonDelete.style";

interface CommonDeleteProp {
	title: string;
	reasonDefaultText: string;
	modalType: string;
	selectData: (
		| {
				title: string;
				placeholder: string;
				subText: string;
		  }
		| {
				title: string;
				subText: string;
				placeholder?: undefined;
		  }
	)[];
	footerBtnText: string;
}

const CommonDelete = ({
	title,
	reasonDefaultText,
	modalType,
	selectData,
	footerBtnText,
}: CommonDeleteProp) => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const [reason, setReason] = useState(reasonDefaultText);

	return (
		<div css={layoutStyle}>
			<h1>{title}</h1>
			<div
				css={getReasonBoxStyle(reason !== reasonDefaultText)}
				onClick={() => dispatch(openModal(modalType))}
			>
				<p>{reason}</p>
				<DownArrowIcon />
			</div>

			{selectData.map((data) => (
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

			<FooterBtn text={footerBtnText} isTransparent disabled={reason === reasonDefaultText} />

			{modal === "DELETE_REASON" && <DeleteReasonModal changeReason={setReason} />}
			{modal === "LEAVE_REASON" && <LeaveReasonModal changeReason={setReason} />}
		</div>
	);
};

export default CommonDelete;
