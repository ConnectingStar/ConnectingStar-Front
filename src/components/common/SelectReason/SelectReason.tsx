import { useState } from "react";

import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import SelectReasonModal from "@/components/common/SelectReason/SelectReasonModal/SelectReasonModal";

import { useAppSelector, useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import {
	layoutStyle,
	getReasonBoxStyle,
	middleBoxStyle,
	textBoxStyle,
	subTextBoxStyle,
} from "@/components/common/SelectReason/SelectReason.style";

interface SelectReasonProps {
	title: string;
	reasonDefaultText: string;
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

const SelectReason = ({
	title,
	reasonDefaultText,
	selectData,
	footerBtnText,
}: SelectReasonProps) => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const [isInputFocus, setIsInputFocus] = useState(false);

	const [reason, setReason] = useState(reasonDefaultText);
	const [inputText, setInputText] = useState("");

	return (
		<div css={layoutStyle}>
			<h1>{title}</h1>
			<div
				css={getReasonBoxStyle(reason !== reasonDefaultText)}
				onClick={() => dispatch(openModal(modalType.SELECT_REASON))}
			>
				<p>{reason}</p>
				<DownArrowIcon />
			</div>

			{selectData.map((data) => (
				<div key={data.title} css={middleBoxStyle}>
					{data.placeholder && data.title === reason && (
						<div css={textBoxStyle}>
							<textarea
								placeholder={data.placeholder}
								onFocus={() => setIsInputFocus(true)}
								value={inputText}
								onChange={(e) => setInputText(e.target.value)}
							/>
						</div>
					)}

					{data.title === reason && (
						<div css={subTextBoxStyle}>
							<p>{data.subText}</p>
						</div>
					)}
				</div>
			))}

			{isInputFocus ? (
				<FooterBtn
					text="확인"
					isSquare
					isTransparent
					disabled={inputText === ""}
					handleBtnClick={() => setIsInputFocus(false)}
				/>
			) : (
				<FooterBtn text={footerBtnText} isTransparent disabled={reason === reasonDefaultText} />
			)}

			{modal === modalType.SELECT_REASON && (
				<SelectReasonModal
					changeReason={setReason}
					reasonData={selectData}
					reasonDefaultText={reasonDefaultText}
				/>
			)}
		</div>
	);
};

export default SelectReason;
