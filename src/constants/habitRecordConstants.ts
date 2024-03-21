type HabitCondition = {
	[condition: string]: string;
};

export const habitConditions: HabitCondition[] = [
	{
		condition: "when",
		placeholder: "오후 8시에",
	},
	{
		condition: "where",
		placeholder: "우리 집 안 내 책상 위에서",
	},
	{
		condition: "what",
		placeholder: "책 읽기를",
	},
	{
		condition: "unit",
		placeholder: "",
	},
];

export const prizeCommentsArray = [
	{
		HABIT_RECORD_BLUE_TEXT: `완벽의 강박을 덜어낸\n당신에게 `,
		HABIT_RECORD_YELLOW_TEXT: `별을 드릴게요!`,
		HABIT_RECORD_WHITE_TEXT: `[정체성한] 사람에\n한걸음 더 다가갔군요 😊`,
	},
	{
		HABIT_RECORD_BLUE_TEXT: `생각한 대로 해내는\n당신에게 `,
		HABIT_RECORD_YELLOW_TEXT: `별을 드려요!`,
		HABIT_RECORD_WHITE_TEXT: `정체성 [정체성한]이\n한층 뚜렷해졌어요 😊`,
	},
	{
		HABIT_RECORD_BLUE_TEXT: `목표치를 초과 달성한\n당신에게 `,
		HABIT_RECORD_YELLOW_TEXT: `별을 드립니다!`,
		HABIT_RECORD_WHITE_TEXT: `[정체성한] 사람에\n한걸음 더 다가갔군요 😊`,
	},
];
