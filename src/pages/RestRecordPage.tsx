import { useNavigate } from "react-router-dom";

import Header from "@/components/common/Header/Header";
import RestRecord from "@/components/Habit/RestRecord/RestRecord";

function RestCommentPage() {
	const navigate = useNavigate();
	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.TextButton onClick={() => navigate("/habitmanagement")}>관리</Header.TextButton>
			</Header>
			<RestRecord />
		</>
	);
}

export default RestCommentPage;
