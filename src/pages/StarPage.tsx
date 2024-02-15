import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header";
import CategoryTab from "@/components/StarPage/CategoryTab";

const StarPage = () => {
	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.Title>별자리 카드</Header.Title>
			</Header>
			<CategoryTab />
			<Gnb />
		</>
	);
};

export default StarPage;
