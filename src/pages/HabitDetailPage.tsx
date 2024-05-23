import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import HabitDetail from "@/components/Habit/HabitDetail/HabitDetail";

function HabitDetailPage() {
	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<HabitDetail />
			<FooterBtn text="확인" isTransparent />
		</>
	);
}

export default HabitDetailPage;
