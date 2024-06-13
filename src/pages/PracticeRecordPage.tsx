import { useNavigate, useParams } from "react-router-dom";

import Header from "@/components/common/Header/Header";
import HabitRecord from "@/components/Habit/HabitRecord/HabitRecord";

import { PATH } from "@/constants/path";

const PracticeRecordPage = () => {
	const navigate = useNavigate();

	const params = useParams();

	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.TextButton onClick={() => navigate(PATH.EDIT_HABIT(params.habitId))}>
					관리
				</Header.TextButton>
			</Header>
			<HabitRecord />
		</>
	);
};

export default PracticeRecordPage;
