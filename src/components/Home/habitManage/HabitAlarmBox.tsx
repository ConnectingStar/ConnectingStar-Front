import { alarmBoxStyle } from "@/components/Home/habitManage/HabitManage.style";

interface HabitAlarmBoxProps {
	inputs: {
		title: string;
		target: string;
		time: string;
		comment: string;
	};
	alarm: { [key: string]: boolean };
	CheckAlarm: (target: string) => void;
}

function HabitAlarmBox({ inputs, alarm, CheckAlarm }: HabitAlarmBoxProps) {
	const { title, target, time, comment } = inputs;
	return (
		<div css={alarmBoxStyle(alarm[target])}>
			<span>
				<h1>{title}</h1>
				<p>{time}</p>
			</span>
			<div>{comment}</div>
			<div className="toggle" onClick={() => CheckAlarm(target)}>
				<span />
			</div>
		</div>
	);
}

export default HabitAlarmBox;
