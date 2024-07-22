import HabitActionRecord from "@/components/Habit/HabitRecord/HabitActionRecord";

import { layoutStyle } from "@/components/Habit/HabitRecord/HabitRecord.style";

const HabitRecord = () => {
	const mode = ["휴식", "실천"];
	const randomIndex = Math.floor(Math.random() * 10);
	const today = new Date();
	return (
		<main css={layoutStyle}>
			<h1>{`${today.getMonth() + 1}월 ${today.getDate()}일\n영택님의 ${mode[randomIndex % 2]} 기록`}</h1>
			{mode[randomIndex % 2] === "실천" && <HabitActionRecord />}
			<div>
				<h2>별자취 남기기</h2>
				<p>오늘은 목표량을 잘 달성하여 뿌듯하다! 앞으로도 열심히 해야겠다.</p>
			</div>
		</main>
	);
};

export default HabitRecord;
