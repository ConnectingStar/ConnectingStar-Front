import Header from "@/components/common/Header/Header";
import Withdrawal from "@/components/MyPage/Withdrawal/Withdrawal";

const WithdrawalPage = () => {
	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<Withdrawal />
		</>
	);
};

export default WithdrawalPage;
