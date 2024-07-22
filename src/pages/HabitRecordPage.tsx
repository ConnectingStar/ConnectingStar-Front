import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import HabitRecord from "@/components/Habit/HabitRecord/HabitRecord";

const HabitRecordPage = () => {
	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<HabitRecord />
			<FooterBtn text="확인" isTransparent />
		</>
	);
};

export default HabitRecordPage;
