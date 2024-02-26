import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";
import HabitRecord from "@/components/HabitRecord/HabitRecord";

function HabitRecordPage() {
	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.TextButton>관리</Header.TextButton>
			</Header>
			<HabitRecord />
			<Gnb />
		</>
	);
}

export default HabitRecordPage;
