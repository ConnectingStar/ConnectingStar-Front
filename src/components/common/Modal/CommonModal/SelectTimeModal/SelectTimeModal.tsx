import { useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import TimePicker from "@/components/common/Modal/CommonModal/SelectTimeModal/TimePicker/TimePicker";
import TimeTextInput from "@/components/common/Modal/CommonModal/SelectTimeModal/TimeTextInput/TimeTextInput";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { useToast } from "@/hooks/useToast";

import {
	adjustTime,
	earlyTimeValidation,
	lateTimeValidation,
	convertTimeString,
	convertFromTimeString,
} from "@/utils/time";

import type { HabitRequestV2Type } from "@/types/habit";

import {
	footerBtnBoxStyle,
	layoutStyle,
	timeBoxStyle,
} from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal.style";

const NOON_LIST = ["오전", "오후"];

interface selectTimeModalType {
	title?: string;
	progress?: number;
	runTime?: string;
	prevTime?: string;
	addprogress?: () => void;
	updateInputValue?: <Key extends keyof HabitRequestV2Type>(
		key: Key,
		value: HabitRequestV2Type[Key],
	) => void;
	handleChangeRunTime?: (runTime: string) => void;
}

function SelectTimeModal({
	title,
	progress,
	runTime,
	prevTime,
	addprogress,
	updateInputValue,
	handleChangeRunTime,
}: selectTimeModalType) {
	const dispatch = useAppDispatch();

	const { createToast } = useToast();

	const prevFormatTime = prevTime
		? {
				noon: prevTime.split(" ")[0],
				hour: prevTime.split(" ")[1].split(":")[0],
				minute: prevTime.split(" ")[1].split(":")[1],
			}
		: { noon: "오전", hour: "00", minute: "00" };

	const [selectTime, setSelectTime] = useState(prevFormatTime);

	const handleChangeTime = (target: string, value: string) => {
		setSelectTime({ ...selectTime, [target]: value });
	};

	const handleSelectClick = () => {
		const addZeroTime = {
			...selectTime,
			hour: selectTime.hour.length < 2 ? `0${selectTime.hour}` : selectTime.hour,
			minute: selectTime.minute.length < 2 ? `0${selectTime.minute}` : selectTime.minute,
		};

		if (title === "시간을 선택해 주세요") {
			if (addprogress !== undefined && progress === 4) {
				addprogress();
			}

			if (addprogress) {
				if (!updateInputValue) return;

				updateInputValue(
					"runTime",
					convertTimeString(addZeroTime.noon, addZeroTime.hour, addZeroTime.minute),
				);

				const addTimeFirst = adjustTime({ time: selectTime, change: -10 });
				const addTimeSecond = adjustTime({ time: selectTime, change: 30 });

				updateInputValue(
					"firstAlert",
					convertTimeString(addTimeFirst.noon, addTimeFirst.hour, addTimeFirst.minute),
				);
				updateInputValue(
					"secondAlert",
					convertTimeString(addTimeSecond.noon, addTimeSecond.hour, addTimeSecond.minute),
				);
			}

			updateInputValue &&
				updateInputValue(
					"runTime",
					convertTimeString(addZeroTime.noon, addZeroTime.hour, addZeroTime.minute),
				);
			handleChangeRunTime &&
				handleChangeRunTime(
					convertTimeString(addZeroTime.noon, addZeroTime.hour, addZeroTime.minute),
				);
		}

		if (title === "1차 알림시간을 선택해 주세요") {
			if (earlyTimeValidation(selectTime, convertFromTimeString(runTime))) {
				updateInputValue &&
					updateInputValue(
						"firstAlert",
						convertTimeString(addZeroTime.noon, addZeroTime.hour, addZeroTime.minute),
					);
			} else {
				createToast("약속시간 보다 이르게 설정해 주세요");

				return;
			}
		}

		if (title === "2차 알림시간을 선택해 주세요") {
			if (lateTimeValidation(selectTime, convertFromTimeString(runTime))) {
				updateInputValue &&
					updateInputValue(
						"secondAlert",
						convertTimeString(addZeroTime.noon, addZeroTime.hour, addZeroTime.minute),
					);
			} else {
				createToast("약속시간 보다 늦게 설정해 주세요");

				return;
			}
		}

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
						<TimeTextInput
							valueKey="hour"
							selectTime={selectTime.hour}
							handleChangeTime={handleChangeTime}
						/>

						<p>:</p>
						<TimeTextInput
							valueKey="minute"
							selectTime={selectTime.minute}
							handleChangeTime={handleChangeTime}
						/>
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
