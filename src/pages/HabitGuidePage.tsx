import { useNavigate } from "react-router-dom";

import Header from "@/components/common/Header/Header";
import HabitGuide from "@/components/Home/HabitGuide/HabitGuide";

function HabitGuidePage() {
	const navigate = useNavigate();
	return (
		<>
			<Header>
				<Header.Title>습관 도움말</Header.Title>
				<Header.PrevButton onClick={() => navigate("/")} />
			</Header>
			<HabitGuide />
		</>
	);
}

export default HabitGuidePage;
