import SelectTimeModal from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

const TestPage = () => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	return (
		<>
			<button onClick={() => dispatch(openModal(modalType.SELECT_TIME))}>test</button>

			{modal === modalType.SELECT_TIME && <SelectTimeModal />}
		</>
	);
};

export default TestPage;
