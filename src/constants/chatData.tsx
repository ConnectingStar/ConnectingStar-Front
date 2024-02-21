// TODO: 나중에 없애기
export const userData = {
	nickName: "닉네임",
	habit: "습관",
	identity: "정체성",
	time: "오후 10:00",
	location: "집 앞 산책로",
	action: "5장",
	alert1: "오후 09:50",
	alert2: "오후 10:10",
};

export const chatData = [
	{
		id: 0,
		text: [
			`반가워요 ${userData.nickName}님! 저는 습관 형성 도우미 Tars에요 :)`,
			"어떤 습관을 함께 만들어 볼까요?",
			"매일 해도 무리 없는 쉬운 것부터 시작하기를 추천해요 😊",
		],
	},
	{
		id: 1,
		text: [
			"그렇군요!",
			"이번엔 정체성을 정해 볼게요",
			`${userData.habit}를(을) 통해서 ${userData.nickName}님은 어떤 사람이 되고 싶으세요?`,
		],
	},
	{
		id: 2,
		text: [
			"좋습니다 :)",
			"지금 이 순간부터 {닉네임}님은 {매일 발전하는} 사람이에요",
			`오늘부터 진심으로 {닉네임}님은 {정체성한} 사람이라고 믿어 주세요!`,
		],
	},
];
