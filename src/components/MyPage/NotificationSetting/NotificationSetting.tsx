import Button from "@/components/MyPage/NotificationSetting/Button";
import StopHabitModal from "@/components/MyPage/NotificationSetting/StopHabitModal/StopHabitModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import {
	layoutStyle,
	topBoxStyle,
	notificationBoxStyle,
} from "@/components/MyPage/NotificationSetting/NotificationSetting.style";

const NotificationSetting = () => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	return (
		<div css={layoutStyle}>
			<div css={topBoxStyle}>
				<p>
					선택한 기간 동안 모든 약속을 잠시 중단해요.
					<br />
					종료 다음날부터 알림을 재시작합니다.
				</p>
				<Button
					title="약속 전체 일시 정지"
					subTitle="2024.01.07 - 2024.01.13"
					isToggle
					isDateText
					isTextVisible
					onClick={() => dispatch(openModal(modalType.STOP_HABIT))}
				/>
			</div>

			<div css={notificationBoxStyle}>
				<h3>1차 알림과 2차 알림</h3>
				<Button title="1차 알림" subTitle="곧 약속 시간이에요 :) 성장하는 세림님 화이팅!" />
				<Button
					title="2차 알림"
					subTitle="오늘의 실천 결과는 어땠나요? 기록을 남기고 별 받아 가세요!"
				/>
				<Button
					title="습관별로 관리하고 싶나요?"
					subTitle="1차 알림과 2차 알림은 각 습관 관리에서 시간을 수정할 수 있어요."
					isHabit
				/>
			</div>

			<div css={notificationBoxStyle}>
				<h3>3차 알림</h3>
				<Button
					title="3차 알림"
					subTitle="곧 기록 시간이 마감돼요. 어제 기록이 입력되지 않았어요. 기록을 남기고 별을 꼭 받아 가세요!"
					isToggle
				/>
			</div>

			{modal === modalType.STOP_HABIT && <StopHabitModal />}
		</div>
	);
};

export default NotificationSetting;
