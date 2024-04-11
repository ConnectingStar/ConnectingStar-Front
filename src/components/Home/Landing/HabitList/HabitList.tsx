import HabitAddIcon from "@/assets/icon/ic-habit-add.svg?react";
import BlueCheckIcon from "@/assets/icon/ic-homepage-habit-blue-check.svg?react";
import TabIcon from "@/assets/icon/ic-homepage-habit-button.svg?react";
import CheckIcon from "@/assets/icon/ic-homepage-habit-check.svg?react";

import HabitCheckModal from "@/components/Home/Landing/Modal/HabitCheckModal";
import HabitModifyModal from "@/components/Home/Landing/Modal/HabitModifyModal";

import { useAppSelector, useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import type { DateInfo } from "@/types/homeTypes";

import {
	layoutStyle,
	habitArticleStyle,
} from "@/components/Home/Landing/HabitList/HabitList.style";

function HabitList({ selectedDate }: { selectedDate: DateInfo }) {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const { HABIT_CHECK_MODAL, HABIT_MODIFY_MODAL } = modalType;

	// api 연결 후 해당 날짜로 api 호출
	console.log(selectedDate);

	// 호출 이후 아래 article단위 습관들 연결
	// 현재는 각 상태 별 종류 다 만들어놓은 상태
	// 공통화 시켜서 간소화할 수 있지만 알아보기 쉽게 다 렌더링시켜놓음

	return (
		<div css={layoutStyle}>
			<div css={habitArticleStyle()}>
				<div onClick={() => dispatch(openModal(HABIT_CHECK_MODAL))}>
					<CheckIcon />
					<p>오후 8시에 우리 집 안 내 책상 위에서 책 읽기 5 페이지</p>
				</div>

				<button onClick={() => dispatch(openModal(HABIT_MODIFY_MODAL))}>
					<TabIcon />
				</button>
			</div>

			<div css={habitArticleStyle("complete")}>
				<div onClick={() => dispatch(openModal(HABIT_CHECK_MODAL))}>
					<BlueCheckIcon />
					<p>오후 8시에 우리 집 안 내 책상 위에서 책 읽기 5 페이지</p>
				</div>
				<button onClick={() => dispatch(openModal(HABIT_MODIFY_MODAL))}>
					<TabIcon />
				</button>
			</div>

			<div css={habitArticleStyle("rest")}>
				<div onClick={() => dispatch(openModal(HABIT_CHECK_MODAL))}>
					<span>휴식</span>
					<p>오후 8시에 우리 집 안 내 책상 위에서 책 읽기 5 페이지</p>
				</div>

				<button onClick={() => dispatch(openModal(HABIT_MODIFY_MODAL))}>
					<TabIcon />
				</button>
			</div>

			<div css={habitArticleStyle("end")}>
				<div onClick={() => dispatch(openModal(HABIT_CHECK_MODAL))}>
					<p>오후 8시에 우리 집 안 내 책상 위에서 책 읽기 5 페이지</p>
				</div>

				<button onClick={() => dispatch(openModal(HABIT_MODIFY_MODAL))}>
					<TabIcon />
				</button>
			</div>

			<div css={habitArticleStyle("add")}>
				<HabitAddIcon />
			</div>

			{modal === modalType.HABIT_MODIFY_MODAL && <HabitModifyModal />}
			{modal === modalType.HABIT_CHECK_MODAL && (
				<HabitCheckModal text="오후 8시에 우리 집 안 내 책상 위에서 책 읽기 5 페이지" />
			)}
		</div>
	);
}

export default HabitList;
