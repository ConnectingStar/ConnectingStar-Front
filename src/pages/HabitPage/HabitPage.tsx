import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import HabitAddIcon from "@/assets/icon/ic-habit-add.svg?react";

import Gnb from "@/components/common/Gnb/Gnb";
import Calender from "@/components/Habit/Calendar/Calender";
import HabitAdviceBanner from "@/components/Habit/HabitAdviceBanner/HabitAdviceBanner";
import HabitGuideBanner from "@/components/Habit/HabitGuideBanner/HabitGuideBanner";
import HabitItem from "@/components/Habit/HabitItem/HabitItem";
import Profile from "@/components/Habit/Profile/Profile";

import { getProgressHabitList, getHabitHistoryList } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";

import { WEEK, TODAY } from "@/constants/calendar";
import { PATH } from "@/constants/path";

import { generateHabitText } from "@/utils/generateHabitText";

import {
	mainBoxStyle,
	mainTopBoxStyle,
	habitListBoxStyle,
} from "@/pages/HabitPage/HabitPage.style";
import { habitArticleStyle } from "@/pages/HabitPage/HabitPage.style";

import type { DateInfo } from "@/types/homeTypes";

const HabitPage = () => {
	const dispatch = useAppDispatch();

	const { progressHabitList, habitHistoryList } = useAppSelector((state) => state.habit);

	const navigate = useNavigate();

	console.log(progressHabitList);
	console.log(habitHistoryList);

	const { year, month, date, day } = TODAY;

	const [selectedDate, setSelectedDate] = useState<DateInfo>({
		year,
		month: month + 1,
		date,
		day: WEEK[day],
		isPlanned: false,
	});

	const handleSelectedDate = (date: DateInfo) => {
		setSelectedDate(date);
	};

	useEffect(() => {
		dispatch(getProgressHabitList());
		dispatch(getHabitHistoryList({ runHabitId: 38, increase: true, isRest: false }));
	}, []);

	return (
		<>
			<main css={mainBoxStyle}>
				<Profile />
				<div css={mainTopBoxStyle}>
					<HabitGuideBanner />
					<HabitAdviceBanner />
				</div>
				<Calender handleSelectedDate={handleSelectedDate} selectedDate={selectedDate} />
				<div css={habitListBoxStyle}>
					{progressHabitList.map((habitData) => (
						<HabitItem
							key={habitData.runHabitId}
							habitId={habitData.runHabitId}
							habitState="progress"
							habitText={generateHabitText(
								habitData.runTime,
								habitData.place,
								habitData.behavior,
								habitData.behaviorValue,
								habitData.behaviorUnit,
							)}
						/>
					))}

					<div css={habitArticleStyle("add")} onClick={() => navigate(PATH.CREATE_HABIT)}>
						<HabitAddIcon />
					</div>
				</div>
			</main>
			<Gnb />
		</>
	);
};

export default HabitPage;
