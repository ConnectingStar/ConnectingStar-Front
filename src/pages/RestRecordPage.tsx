import { useNavigate } from "react-router-dom";

import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";
import RestRecord from "@/components/RestRecord/RestRecord";

function RestCommentPage() {
	const navigate = useNavigate();
	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.TextButton onClick={() => navigate("/habitmanagement")}>관리</Header.TextButton>
			</Header>
			<RestRecord />
			<Gnb />
		</>
	);
}

export default RestCommentPage;
