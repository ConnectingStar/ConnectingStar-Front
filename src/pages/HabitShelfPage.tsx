import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import HabitShelf from "@/components/Home/HabitShelf/HabitShelf";

function HabitShelfPage() {
	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<HabitShelf />
			<FooterBtn text="확인" isTransparent />
		</>
	);
}

export default HabitShelfPage;
