import Header from "@/components/common/Header/Header";
import HabitGenerate from "@/components/Habit/HabitGenerate/HabitGenerate";

function HabitGeneratePage() {
	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.Title>습관 약속 만들기</Header.Title>
			</Header>
			<HabitGenerate />
		</>
	);
}

export default HabitGeneratePage;
