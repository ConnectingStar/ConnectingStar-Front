import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";
import Landing from "@/components/MyPage/Landing/Landing";

const MyPage = () => {
	return (
		<>
			<Header>
				<Header.Title hasButton={false}>마이 페이지</Header.Title>
			</Header>
			<Landing />
			<Gnb />
		</>
	);
};

export default MyPage;
