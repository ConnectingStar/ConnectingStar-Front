import { useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import TimePicker from "@/components/common/Modal/CommonModal/SelectTimeModal/TimePicker/TimePicker";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { updateHabitUserData } from "@/api/user/userSlice";

import { NOON_LIST, HOUR_LIST, MINUTE_LIST } from "@/constants/time";

import {
	footerBtnBoxStyle,
	layoutStyle,
	timeBoxStyle,
} from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal.style";

interface selectTimeModalType {
	title: string;
	progress?: number;
	addprogres?: () => void;
}

function SelectTimeModal({ title, progress, addprogres }: selectTimeModalType) {
	const dispatch = useAppDispatch();

	const [selectTime, setSelectTime] = useState({ noon: "오전", hour: "00", minute: "00" });

	const handleChangeTime = (target: string, value: string) => {
		setSelectTime({ ...selectTime, [target]: value });
	};

	// hour와 minute의 길이가 1이라면 앞에 0을 붙여주는 함수
	const updatedTime = {
		...selectTime,
		hour: selectTime.hour.length < 2 ? `0${selectTime.hour}` : selectTime.hour,
		minute: selectTime.minute.length < 2 ? `0${selectTime.minute}` : selectTime.minute,
	};

	const handleSelectClick = () => {
		if (title === "시간을 선택해 주세요") {
			if (addprogres !== undefined && progress === 4) addprogres();
			dispatch(updateHabitUserData({ time: updatedTime }));
		}
		if (title === "1차 알림시간을 선택해 주세요")
			dispatch(updateHabitUserData({ alert1: updatedTime }));
		if (title === "2차 알림시간을 선택해 주세요")
			dispatch(updateHabitUserData({ alert1: updatedTime }));

		dispatch(closeModal());
	};

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>{title}</h1>

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
