import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HabitAddIcon from "@/assets/icon/ic-habit-add.svg?react";

import HabitBox from "@/components/Habit/Landing/HabitList/HabitBox";
import HabitCheckModal from "@/components/Habit/Modal/HabitCheckModal";
import HabitModifyModal from "@/components/Habit/Modal/HabitModifyModal";

import { useAppSelector, useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { homeHabitList } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";
import { PATH } from "@/constants/path";

import type { DateInfo } from "@/types/homeTypes";

import {
	layoutStyle,
	habitArticleStyle,
} from "@/components/Habit/Landing/HabitList/HabitList.style";

function HabitList({ selectedDate }: { selectedDate: DateInfo }) {
	const dispatch = useAppDispatch();
	const [modalText, setModalText] = useState<string>("");

	const { modal } = useAppSelector((state) => state.modal);

	const { HABIT_CHECK_MODAL, HABIT_MODIFY_MODAL } = modalType;

	const navigate = useNavigate();

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
			{homeHabitList.map(({ state, text }) => (
				<HabitBox
					key={text}
					habitState={state}
					text={text}
					handleHabitCheck={handelHabitCheck}
					handleHabitModify={handleHabitModify}
				/>
			))}

			<div css={habitArticleStyle("add")} onClick={() => navigate(PATH.CREATE_HABIT)}>
				<HabitAddIcon />
			</div>

			{modal === modalType.HABIT_MODIFY_MODAL && <HabitModifyModal />}
			{modal === modalType.HABIT_CHECK_MODAL && <HabitCheckModal text={modalText} />}
		</div>
	);
}

export default HabitList;
