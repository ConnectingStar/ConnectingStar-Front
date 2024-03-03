export type DateInfo = {
	year: number;
	month: number;
	date: number;
	day: string;
	isPlanned: boolean;
};

export type CalenderProps = {
	setSelectedDate: React.Dispatch<React.SetStateAction<DateInfo>>;
	selectedDate: DateInfo;
	timeGap: string;
};
