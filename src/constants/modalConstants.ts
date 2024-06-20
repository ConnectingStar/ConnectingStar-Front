export const modalType = {
	LEAVE_REASON: "LEAVE_REASON",
	SELECT_CHARACTER: "SELECT_CHARACTER",
	SELECT_GENDERTYPE: "SELECT_GENDERTYPE",
	CHANGE_NICKNAME: "CHANGE_NICKNAME",
	SELECT_AGERANGETYPE: "SELECT_AGERANGETYPE",
	SELECT_IDENTITY: "SELECT_IDENTITY",
	SELECT_MAIN_IDENTITY: "SELECT_MAIN_IDENTITY",
	SELECT_TIME: (type: string) => `SELECT_TIME_${type}`,
	SELECT_PLACE: "SELECT_PLACE",
	SELECT_BEHAVIOR: "SELECT_BEHAVIOR",
	SELECT_BEHAVIORUNIT: "SELECT_BEHAVIORUNIT",
	LOGOUT: "LOGOUT",
	SORT: "SORT",
	DELETE_HISTORY: (id: number) => `DELETE_HISTORY_${id}`,
	HABIT_EDIT: (habidId?: number) => `HABIT_EDIT_${habidId}`,
	HABIT_RECORD: (habitId?: number) => `HABIT_RECORD_${habitId}`,
	STOP_HABIT: "STOP_HABIT",
	SELECT_REASON: "SELECT_REASON",
	STAR_PRIZE: "STAR_PRIZE",
	SELECT_STAR: "SELECT_STAR",
	SELECT_PROFILE_CHARACTER: "SELECT_PROFILE_CHARACTER",
	CHARACTER_UNLOCK: "CHARACTER_UNLOCK",
	ALARM_CHECK: "ALARM_CHECK",
	HABIT_GENERATE: "HABIT_GENERATE",
};

export const SELECT_TAG_DATA = {
	habitTags: [
		"러닝하기",
		"헬스하기",
		"산책하기",
		"명상하기",
		"기도하기",
		"자기확언",
		"책 읽기",
		"신문보기",
		"공부하기",
		"블로깅",
		"일기작성",
		"소비기록",
	],
	identityTags: [
		"건강한",
		"박식한",
		"생산적인",
		"스스로를 믿는",
		"매일 발전하는",
		"지혜로운",
		"유연한",
		"너그러운",
		"글로 성장하는",
		"스스로를 통제하는",
	],
};
