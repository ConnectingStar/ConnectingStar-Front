import Header from "@/components/common/Header/Header";
import CreateHabit from "@/components/Habit/CreateHabit/CreateHabit";

const CreateHabitPage = () => {
	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.Title>습관 약속 만들기</Header.Title>
			</Header>
			<CreateHabit />
		</>
	);
};

export default CreateHabitPage;
