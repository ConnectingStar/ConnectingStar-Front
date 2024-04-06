import { useState } from "react";

import AlarmCheckModal from "@/components/Home/habitManage/AlarmCheckModal/AlarmCheckModal";
import HabitAlarmBox from "@/components/Home/habitManage/HabitAlarmBox";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { habitManageConditions, habitManageAlarms } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";

import {
	layoutStyle,
	conditionStyle,
	quitButtonStyle,
} from "@/components/Home/habitManage/HabitManage.style";

interface Alarm {
	first: boolean;
	second: boolean;
	[key: string]: boolean;
}

function HabitManage() {
	const dispatch = useAppDispatch();
	const { modal } = useAppSelector((state) => state.modal);
	const [target, setTarget] = useState<string>("");
	const [alarm, setAlarm] = useState<Alarm>({
		first: false,
		second: false,
	});

	const CheckAlarm = (target: string) => {
		setTarget(target);
		if (!alarm[target]) {
			dispatch(openModal(modalType.ALARM_CHECK));
		} else {
			setAlarm({ ...alarm, [target]: false });
		}
	};

	return (
		<main css={layoutStyle}>
			<div css={conditionStyle}>
				<p>정체성</p>
				<p>성장하는</p>
			</div>
			<div>
				<span>습관</span>
				{habitManageConditions.map((condition) => (
					<div css={conditionStyle}>
						<p>{condition.title}</p>
						<p>{condition.input}</p>
					</div>
				))}
			</div>
			<div>
				<span>알림</span>
				{habitManageAlarms.map((inputs) => (
					<HabitAlarmBox inputs={inputs} alarm={alarm} CheckAlarm={CheckAlarm} />
				))}
			</div>
			<button css={quitButtonStyle}>습관 그만두기</button>
			{modal === modalType.ALARM_CHECK && (
				<AlarmCheckModal target={target} alarm={alarm} setAlarm={setAlarm} />
			)}
		</main>
	);
}

export default HabitManage;
