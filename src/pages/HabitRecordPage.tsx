import Header from "@/components/common/Header/Header";
import HabitRecord from "@/components/Habit/HabitRecord/HabitRecord";

function HabitRecordPage() {
	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.TextButton>관리</Header.TextButton>
			</Header>
			<HabitRecord />
		</>
	);
}

export default HabitRecordPage;
