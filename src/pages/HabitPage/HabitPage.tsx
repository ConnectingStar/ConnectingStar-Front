import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import HabitAddIcon from "@/assets/icon/ic-habit-add.svg?react";
import HabitInfoIcon from "@/assets/icon/ic-habit-info.svg?react";

import Gnb from "@/components/common/Gnb/Gnb";
import Calender from "@/components/Habit/Calendar/Calender";
import HabitAdviceBanner from "@/components/Habit/HabitAdviceBanner/HabitAdviceBanner";
import HabitGuideBanner from "@/components/Habit/HabitGuideBanner/HabitGuideBanner";
import HabitItem from "@/components/Habit/HabitItem/HabitItem";
import Profile from "@/components/Habit/Profile/Profile";

import { getHabitRecordOneDay } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";

import { WEEK, TODAY } from "@/constants/calendar";
import { PATH } from "@/constants/path";

import {
	mainBoxStyle,
	mainTopBoxStyle,
	habitListBoxStyle,
	habitCountBoxStyle,
	habitCountTextStyle,
	habitInfoTextStyle,
	habitInfoBoxStyle,
	addButtonStyle,
} from "@/pages/HabitPage/HabitPage.style";

import type { DateInfo } from "@/types/homeTypes";

const HabitPage = () => {
	const dispatch = useAppDispatch();

	const { habitRecordOneDay } = useAppSelector((state) => state.habit);

	const navigate = useNavigate();

	const { year, month, date, day } = TODAY;

	const [selectedDate, setSelectedDate] = useState<DateInfo>({
		year,
		month: month + 1,
		date,
		day: WEEK[day],
		isPlanned: habitRecordOneDay.map((data) => data.history === null).includes(false),
	});

	const formatMonth = selectedDate.month < 10 ? `0${selectedDate.month}` : selectedDate.month;
	const formatDate = selectedDate.date < 10 ? `0${selectedDate.date}` : selectedDate.date;

	const handleSelectedDate = (date: DateInfo) => {
		setSelectedDate(date);
	};

	useEffect(() => {
		dispatch(getHabitRecordOneDay(`${selectedDate.year}-${formatMonth}-${formatDate}`));
	}, [selectedDate]);

	return (
		<>
			<main css={mainBoxStyle}>
				<Profile habitCount={habitRecordOneDay.length} />
				<div css={mainTopBoxStyle}>
					<HabitGuideBanner />
					<HabitAdviceBanner />
				</div>
				<Calender handleSelectedDate={handleSelectedDate} selectedDate={selectedDate} />

				<div css={habitListBoxStyle}>
					<div css={habitCountBoxStyle}>
						<p>
							<span css={habitCountTextStyle}>{habitRecordOneDay.length}</span>/<span>3</span>
						</p>
						<div css={habitInfoBoxStyle}>
							<HabitInfoIcon />
							<span css={habitInfoTextStyle}>핵심 습관에 집중하기 위해 습관은 3개까지만!</span>
						</div>
					</div>
					{habitRecordOneDay.map((habitData) => (
						<HabitItem
							key={habitData.habit.runHabitId}
							habitData={habitData}
							year={selectedDate.year}
							month={selectedDate.month}
							date={selectedDate.date}
						/>
					))}
					{habitRecordOneDay.length < 3 && (
						<div css={addButtonStyle} onClick={() => navigate(PATH.CREATE_HABIT)}>
							<HabitAddIcon />
						</div>
					)}
				</div>
			</main>
			<Gnb />
		</>
	);
};

export default HabitPage;
