import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ToggleButton from "@/components/common/Button/ToggleButton/ToggleButton";
import StopHabitModal from "@/components/MyPage/NotificationSetting/StopHabitModal/StopHabitModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import { useToggleTrigger } from "@/hooks/useToggleTrigger";

import { dateFormat } from "@/utils/dateFormat";

import {
	layoutStyle,
	topBoxStyle,
	notificationBoxStyle,
	homeButtonBoxStyle,
} from "@/components/MyPage/NotificationSetting/NotificationSetting.style";

interface NotificationSettingProps {
	identity: string;
	nickname: string;
}

const NotificationSetting = ({ identity, nickname }: NotificationSettingProps) => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const navigate = useNavigate();

	const {
		isToggle: isStopHabitToggle,
		handleToggle: handleStopHabitToggle,
		handleTogglePrev: handleStopHabitTogglePrev,
	} = useToggleTrigger({ isPause: true });

	const { isToggle: notiToggle, handleTogglePrev: handleNotiTogglePrev } = useToggleTrigger({});

	const [startDay, setStartDay] = useState(new Date());
	const [endDay, setEndDay] = useState(new Date());

	return (
		<div css={layoutStyle}>
			<div css={topBoxStyle}>
				<p>
					선택한 기간 동안 모든 약속을 잠시 중단해요.
					<br />
					종료 다음날부터 알림을 재시작합니다.
				</p>
				<ToggleButton
					title="약속 전체 일시 정지"
					subTitle={`${dateFormat(startDay, "POINT")} - ${dateFormat(endDay, "POINT")}`}
					hasToggle
					isToggle={isStopHabitToggle}
					isDateText
					isTextVisible
					onClick={() => dispatch(openModal(modalType.STOP_HABIT))}
					handleTogglePrev={handleStopHabitTogglePrev}
					isPause
				/>
			</div>

			<div css={notificationBoxStyle}>
				<h3>1차 알림과 2차 알림</h3>
				<ToggleButton
					title="1차 알림"
					subTitle={`${identity} ${nickname}님, 곧 약속 시간이에요!\n오늘도 꾸준한 습관을 응원합니다😊`}
				/>
				<ToggleButton
					title="2차 알림"
					subTitle={`${nickname}님, 오늘 약속은 어떠셨나요?\n실천과 휴식을 기록하면 정체성이 강화됩니다💪`}
				/>
				<div css={homeButtonBoxStyle}>
					<h3>습관별로 관리하고 싶나요?</h3>
					<h4>1차 알림과 2차 알림은 각 습관 관리에서 시간을 수정할 수 있어요.</h4>
					<button onClick={() => navigate("/")}>홈으로</button>
				</div>
			</div>

			<div css={notificationBoxStyle}>
				<h3>3차 알림</h3>
				<ToggleButton
					title="3차 알림"
					subTitle={`앗.. 어제 습관 기록이 없네요😥\n마감(자정) 전에 남기고 정체성 강화하기!`}
					hasToggle
					isToggle={notiToggle}
					handleTogglePrev={handleNotiTogglePrev}
				/>
			</div>

			{modal === modalType.STOP_HABIT && (
				<StopHabitModal
					startDay={startDay}
					setStartDay={setStartDay}
					endDay={endDay}
					setEndDay={setEndDay}
					handleToggle={handleStopHabitToggle}
				/>
			)}
		</div>
	);
};

export default NotificationSetting;
