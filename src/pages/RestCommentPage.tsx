import { useNavigate } from "react-router-dom";

import Gnb from "@/components/common/Gnb/Gnb";
import RestComment from "@/components/restcommentpages/RestComment";

import Header from "@/components/common/Header";

function RestCommentPage() {
	const navigate = useNavigate();
	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.TextButton onClick={() => navigate("/habitmanagement")}>관리</Header.TextButton>
			</Header>
			<RestComment />
			<Gnb />
		</>
	);
}

export default RestCommentPage;
