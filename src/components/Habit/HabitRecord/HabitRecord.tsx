import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import InfoIcon from "@/assets/icon/ic-blue-exclamation-mark.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import SelectTimeModal from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal";
import HabitRecordAchieveModal from "@/components/Habit/Modal/HabitRecordAchieveModal/HabitRecordAchieveModal";
import { CommonAlertType } from "@/types/common";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";
import { getUserInfo } from "@/api/user/userThunk";

import { modalType } from "@/constants/modalConstants";
import { habitIconData } from "@/constants/mypage";

import { useHabitRecordForm } from "@/hooks/useHabitRecordForm";

import { convertTimeString } from "@/utils/time";

import type { HabitType } from "@/types/habit";

import {
	layoutStyle,
	contentBoxStyle,
	contentInputStyle,
	contentTitleBoxStyle,
	iconStyle,
	inputBoxStyle,
	identityBoxStyle,
} from "@/components/Habit/HabitRecord/HabitRecord.style";

interface HabitRecordProps {
	habitData: HabitType;
}

function HabitRecord({ habitData }: HabitRecordProps) {
	const dispatch = useAppDispatch();

	const { userData } = useAppSelector((state) => state.user);
	const { modal } = useAppSelector((state) => state.modal);

	const params = useParams();

	const month = Number(params.month) < 10 ? `0${params.month}` : params.month;
	const date = Number(params.date) < 10 ? `0${params.date}` : params.date;

	const [prevRunTime, setPrevRunTime] = useState(habitData.runTime);
	const [selectedIcon, setSelectedIcon] = useState<number | null>(null);

	const { habitRecordRequest, updateInputValue, handleSubmit } = useHabitRecordForm({
		initialData: {
			runHabitId: habitData.runHabitId,
			referenceDate: `${params.year}-${month}-${date}`,
			runTime: convertTimeString(prevRunTime.noon, prevRunTime.hour, prevRunTime.minute),
			runPlace: `${habitData.place}에서`,
			action: `${habitData.behavior}을(를)`,
			behaviorValue: undefined,
			achievement: -1,
			review: "",
		},
	});

	const handleChangeRunTime = (runTime: CommonAlertType) => {
		setPrevRunTime(runTime);
		updateInputValue("runTime", convertTimeString(runTime.noon, runTime.hour, runTime.minute));
	};

	const handleIconClick = (id: number) => {
		id !== selectedIcon ? setSelectedIcon(id) : setSelectedIcon(null);
		updateInputValue("achievement", id);
	};

	const handleAchieveText = (runValue?: string) => {
		if (!runValue) return;

		if (Number(runValue) < Number(habitData.behaviorValue)) {
			return "less";
		} else if (Number(runValue) === Number(habitData.behaviorValue)) {
			return "enough";
		} else {
			return "many";
		}
	};

	useEffect(() => {
		dispatch(getUserInfo());
	}, []);

	return (
		<main css={layoutStyle}>
			<h1>{`${params.month}월 ${params.date}일\n${userData.nickname}님의 실천 기록`}</h1>
			<div css={identityBoxStyle}>
				<h3>정체성</h3>
				<span>{habitData.identity} 사람</span>
			</div>

			<div css={contentBoxStyle}>
				<div css={contentTitleBoxStyle}>
					<h3>나는</h3>
					<InfoIcon />
					<span>약속대로 실천했다면 얼마나 했는지만 적으면 돼요 :)</span>
				</div>

				<ul>
					<li>
						<div
							css={contentInputStyle(prevRunTime !== habitData.runTime)}
							onClick={() => dispatch(openModal(modalType.SELECT_TIME("RUNTIME")))}
						>
							{`${prevRunTime.noon} ${prevRunTime.hour}시 ${prevRunTime.minute}분에`}
						</div>
					</li>
					<li>
						<input
							css={contentInputStyle()}
							placeholder={`${habitData.place}에서`}
							onChange={(e) => updateInputValue("runPlace", e.target.value)}
						/>
					</li>
					<li>
						<input
							css={contentInputStyle()}
							placeholder={`${habitData.behavior}을(를)`}
							onChange={(e) => updateInputValue("action", e.target.value)}
						/>
					</li>
					<li>
						<input
							css={contentInputStyle()}
							value={habitRecordRequest.behaviorValue || ""}
							maxLength={3}
							onChange={(e) => updateInputValue("behaviorValue", e.target.value)}
						/>
						<span>{habitData.behaviorUnit}</span>
					</li>
				</ul>
				<h3>했다</h3>
			</div>

			<div css={iconStyle}>
				<h3>오늘의 습관 실천을 어떠셨나요?</h3>
				<div>
					{habitIconData.map((habitIcon) => (
						<span
							key={habitIcon.id}
							onClick={() => handleIconClick(habitIcon.id)}
							className={habitIcon.id === selectedIcon ? "selected" : ""}
						>
							{habitIcon.icon}
						</span>
					))}
				</div>
			</div>

			<div css={inputBoxStyle}>
				<label htmlFor="review">
					<h3>별자취 남기기</h3>
				</label>
				<textarea
					placeholder="실천하며 느낀 점이나 다짐 등을 자유롭게 적어보세요!"
					maxLength={1000}
					id="review"
					value={habitRecordRequest.review}
					onChange={(e) => updateInputValue("review", e.target.value)}
				/>
				<span>{habitRecordRequest.review.length}/1,000자</span>
			</div>

			<FooterBtn
				handleBtnClick={handleSubmit}
				text="기록하여 별 얻기"
				isTransparent
				isPositionStatic
				disabled={
					habitRecordRequest.behaviorValue === undefined || habitRecordRequest.achievement === -1
				}
			/>

			{modal === modalType.HABIT_RECORD_ACHIEVE && (
				<HabitRecordAchieveModal
					achieveStatus={handleAchieveText(habitRecordRequest.behaviorValue)}
					identity={habitData.identity}
				/>
			)}

			{modal === modalType.SELECT_TIME("RUNTIME") && (
				<SelectTimeModal title="시간을 선택해 주세요" handleChangeRunTime={handleChangeRunTime} />
			)}
		</main>
	);
}

export default HabitRecord;
