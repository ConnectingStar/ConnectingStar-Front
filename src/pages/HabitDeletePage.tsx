import Header from "@/components/common/Header/Header";
import HabitDelete from "@/components/Home/HabitDelete/HabitDelete";

const HabitDeletePage = () => {
	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<HabitDelete />
		</>
	);
};

export default HabitDeletePage;
