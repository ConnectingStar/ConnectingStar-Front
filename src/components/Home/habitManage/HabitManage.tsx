import { useState } from "react";

import { habitManageConditionArray } from "@/constants/homeConstants";

import {
	layoutStyle,
	alarmBoxStyle,
	quitButtonStyle,
} from "@/components/Home/habitManage/HabitManage.style";

function HabitManage() {
	const [alarm, setAlarm] = useState({
		first: false,
		second: false,
	});

	return (
		<main css={layoutStyle}>
			<div className="condition">안녕</div>
			<div className="tab">
				<label>습관</label>
				{habitManageConditionArray.map((texts) => (
					<div className="condition">
						<span>{texts.TITLE}</span>
						<span>{texts.INPUT}</span>
					</div>
				))}
			</div>
			<div className="tab">
				<label>알람</label>
				<div css={alarmBoxStyle(alarm.first)}>
					<span>
						<h1>{`1차 알림`}</h1>
						<p>{`오후 7:50`}</p>
					</span>
					<article>{`곧 약속 시간이에요 :) 성장하는 세림님 화이팅!`}</article>
					<div className="toggle" onClick={() => setAlarm({ ...alarm, first: !alarm.first })}>
						<span></span>
					</div>
				</div>
				<div css={alarmBoxStyle(alarm.second)}>
					<span>
						<h1>{`2차 알림`}</h1>
						<p>{`오후 8:30`}</p>
					</span>
					<article>{`오늘의 실천 결과는 어땠나요? 기록을 남기고 별 받아 가세요!`}</article>
					<div className="toggle" onClick={() => setAlarm({ ...alarm, second: !alarm.second })}>
						<span></span>
					</div>
				</div>
			</div>
			<button css={quitButtonStyle}>습관 그만두기</button>
		</main>
	);
}

export default HabitManage;
