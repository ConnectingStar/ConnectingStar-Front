import Header from "@/components/common/Header/Header";
import MyInfo from "@/components/MyPage/MyInfo/MyInfo";

const MyInfoPage = () => {
	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.Title>내 정보</Header.Title>
			</Header>
			<MyInfo />;
		</>
	);
};

export default MyInfoPage;
