import { useState } from "react";

import HabitAddIcon from "@/assets/icon/ic-habit-add.svg?react";

import HabitBox from "@/components/Home/Landing/HabitList/HabitBox";
import HabitCheckModal from "@/components/Home/Landing/Modal/HabitCheckModal";
import HabitModifyModal from "@/components/Home/Landing/Modal/HabitModifyModal";

import { useAppSelector, useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { homeHabitList } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";

import type { DateInfo } from "@/types/homeTypes";

import {
	layoutStyle,
	habitArticleStyle,
} from "@/components/Home/Landing/HabitList/HabitList.style";

function HabitList({ selectedDate }: { selectedDate: DateInfo }) {
	const dispatch = useAppDispatch();
	const [modalText, setModalText] = useState<string>("");

	const { modal } = useAppSelector((state) => state.modal);

	const { HABIT_CHECK_MODAL, HABIT_MODIFY_MODAL } = modalType;

	// api 연결 후 해당 날짜로 api 호출
	const handelHabitCheck = (text: string) => {
		setModalText(text);
		dispatch(openModal(HABIT_CHECK_MODAL));
	};

	const handleHabitModify = () => {
		dispatch(openModal(HABIT_MODIFY_MODAL));
	};

	console.log(selectedDate);

	// 호출 이후 아래 article단위 습관들 연결
	// 현재는 각 상태 별 종류 다 만들어놓은 상태
	// 공통화 시켜서 간소화할 수 있지만 알아보기 쉽게 다 렌더링시켜놓음

	return (
		<div css={layoutStyle}>
			{homeHabitList.map(({ state, text }, idx) => (
				<HabitBox
					key={idx}
					habitState={state}
					text={text}
					handleHabitCheck={handelHabitCheck}
					handleHabitModify={handleHabitModify}
				/>
			))}

			<div css={habitArticleStyle("add")}>
				<HabitAddIcon />
			</div>

			{modal === modalType.HABIT_MODIFY_MODAL && <HabitModifyModal />}
			{modal === modalType.HABIT_CHECK_MODAL && <HabitCheckModal text={modalText} />}
		</div>
	);
}

export default HabitList;
