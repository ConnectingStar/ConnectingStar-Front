import { useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import TimePicker from "@/components/common/Modal/CommonModal/SelectTimeModal/TimePicker/TimePicker";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { NOON_LIST, HOUR_LIST, MINUTE_LIST } from "@/constants/time";

import {
	footerBtnBoxStyle,
	layoutStyle,
	timeBoxStyle,
} from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal.style";

function SelectTimeModal() {
	const dispatch = useAppDispatch();

	const [selectTime, setSelectTime] = useState({ noon: "오전", hour: 0, minute: 0 });

	const handleChangeTime = (target: string, value: number | string) => {
		setSelectTime({ ...selectTime, [target]: value });
	};

	const handleSelectClick = () => {
		dispatch(closeModal());

		console.log(selectTime);
	};

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>시간을 선택해 주세요</h1>

				<div css={timeBoxStyle}>
					<div className="noonBox">
						<TimePicker valueKey="noon" list={NOON_LIST} handleChangeTime={handleChangeTime} />
					</div>

					<div className="timeBox">
						<TimePicker valueKey="hour" list={HOUR_LIST} handleChangeTime={handleChangeTime} />
						<p>:</p>
						<TimePicker valueKey="minute" list={MINUTE_LIST} handleChangeTime={handleChangeTime} />
					</div>
				</div>

				<div css={footerBtnBoxStyle}>
					<FooterBtn
						leftText="취소"
						text="선택"
						handleLeftBtnClick={() => dispatch(closeModal())}
						handleBtnClick={handleSelectClick}
						isPositionStatic
					/>
				</div>
			</div>
		</Modal>
	);
}

export default SelectTimeModal;
