export type DateInfo = {
	year: number;
	month: number;
	date: number;
	day: string;
	isPlanned: boolean;
};

export enum HabitStatus {
	None = "none",
	Rest = "rest",
	Checked = "checked",
}

export type HabitsElement = {
	key: number;
	status: HabitStatus;
	article: string;
};

export type CalenderProps = {
	setTargetDate: React.Dispatch<React.SetStateAction<DateInfo>>;
	targetDate: DateInfo;
	timeGap: string;
};
