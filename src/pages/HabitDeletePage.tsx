import CommonDelete from "@/components/common/CommonDelete/CommonDelete";
import Header from "@/components/common/Header/Header";

import { deleteReasonData } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";

const HabitDeletePage = () => {
	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<CommonDelete
				title="어떤 이유로 그만두시나요?"
				reasonDefaultText="그만두는 이유를 선택해 주세요"
				modalType={modalType.DELETE_REASON}
				selectData={deleteReasonData}
				footerBtnText="그만두기"
			/>
		</>
	);
};

export default HabitDeletePage;
