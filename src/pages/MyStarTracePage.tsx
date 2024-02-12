import Header from "@/components/common/Header/Header";
import StarTrace from "@/components/MyPage/StarTrace/StarTrace";

const MyStarTracePage = () => {
	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.Title>나의 별자취</Header.Title>
			</Header>
			<StarTrace />
		</>
	);
};

export default MyStarTracePage;
