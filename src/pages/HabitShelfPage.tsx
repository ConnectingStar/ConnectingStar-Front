import Header from "@/components/common/Header/Header";
import HabitShelf from "@/components/Home/HabitShelf/HabitShelf";

function HabitShelfPage() {
	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<HabitShelf />
		</>
	);
}

export default HabitShelfPage;
