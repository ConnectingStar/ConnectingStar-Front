import Header from "@/components/common/Header/Header";
import SelectReason from "@/components/common/SelectReason/SelectReason";

import { leaveReasonData } from "@/constants/myPageConstants";

const WithdrawalPage = () => {
	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<SelectReason
				title="어떤 이유로 탈퇴하시나요?"
				reasonDefaultText="탈퇴 이유를 선택해 주세요"
				selectData={leaveReasonData}
				footerBtnText="작별하기"
			/>
		</>
	);
};

export default WithdrawalPage;
