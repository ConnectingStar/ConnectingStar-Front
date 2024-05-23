import Header from "@/components/common/Header/Header";
import HabitManage from "@/components/Habit/habitManage/HabitManage";

function HabitManagePage() {
	return (
		<>
			<Header>
				<Header.CloseButton />
				<Header.Title>습관관리</Header.Title>
				<Header.TextButton>완료</Header.TextButton>
			</Header>
			<HabitManage />
		</>
	);
}

export default HabitManagePage;
