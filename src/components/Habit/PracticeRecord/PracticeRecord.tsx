import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import InfoIcon from "@/assets/icon/ic-blue-exclamation-mark.svg?react";
import PencilIcon from "@/assets/icon/ic-habit-pencil.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import SelectTimeModal from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal";
import HabitRecordAchieveModal from "@/components/Habit/Modal/HabitRecordAchieveModal/HabitRecordAchieveModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";
import { getOnlyUserInfo } from "@/api/user/userThunk";

import { modalType } from "@/constants/modalConstants";
import { habitIconData } from "@/constants/mypage";

import { useHabitRecordForm } from "@/hooks/useHabitRecordForm";

import { convertFromTimeString } from "@/utils/time";

import type { HabitV2Type } from "@/types/habit";

import {
	layoutStyle,
	contentBoxStyle,
	contentInputStyle,
	contentTitleBoxStyle,
	iconStyle,
	inputBoxStyle,
	identityBoxStyle,
} from "@/components/Habit/PracticeRecord/PracticeRecord.style";

interface PracticeRecordProps {
	habitData: HabitV2Type;
}

const PracticeRecord = ({ habitData }: PracticeRecordProps) => {
	const dispatch = useAppDispatch();

	const { userInfo } = useAppSelector((state) => state.user);
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
			runTime: habitData.runTime,
			runPlace: `${habitData.place}에서`,
			action: `${habitData.action}을(를)`,
			runValue: undefined,
			achievement: -1,
			review: "",
		},
	});

	const handleChangeRunTime = (runTime: string) => {
		setPrevRunTime(runTime);
		updateInputValue("runTime", runTime);
	};

	const handleIconClick = (id: number) => {
		id !== selectedIcon ? setSelectedIcon(id) : setSelectedIcon(null);
		updateInputValue("achievement", id);
	};

	const handleAchieveText = (runValue?: number) => {
		if (!runValue || !habitData.value) return;

		if (runValue < habitData.value) {
			return "less";
		} else if (runValue === habitData.value) {
			return "enough";
		} else {
			return "many";
		}
	};

	useEffect(() => {
		dispatch(getOnlyUserInfo());
	}, []);

	if (!userInfo) {
		return <div />;
	}

	return (
		<main css={layoutStyle}>
			<h1>{`${params.month}월 ${params.date}일\n${userInfo.nickname}님의 실천 기록`}</h1>
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
							css={contentInputStyle()}
							onClick={() => dispatch(openModal(modalType.SELECT_TIME("RUNTIME")))}
						>
							<p>
								{`${convertFromTimeString(prevRunTime)?.split(" ")[0]} ${convertFromTimeString(prevRunTime)?.split(" ")[1].split(":")[0]}시 ${convertFromTimeString(prevRunTime)?.split(" ")[1].split(":")[1]}분에`}
							</p>
							<PencilIcon />
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
							placeholder={habitData.action}
							onChange={(e) => updateInputValue("action", e.target.value)}
						/>
					</li>
					<li>
						<input
							css={contentInputStyle()}
							value={habitRecordRequest.runValue || ""}
							maxLength={3}
							onChange={(e) => updateInputValue("runValue", Number(e.target.value))}
						/>
						<span>{habitData.unit}</span>
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
				disabled={
					habitRecordRequest.runValue === undefined || habitRecordRequest.achievement === -1
				}
			/>

			{modal === modalType.HABIT_RECORD_ACHIEVE && (
				<HabitRecordAchieveModal
					achieveStatus={handleAchieveText(habitRecordRequest.runValue)}
					identity={habitData.identity}
				/>
			)}

			{modal === modalType.SELECT_TIME("RUNTIME") && (
				<SelectTimeModal title="시간을 선택해 주세요" handleChangeRunTime={handleChangeRunTime} />
			)}
		</main>
	);
};

export default PracticeRecord;
