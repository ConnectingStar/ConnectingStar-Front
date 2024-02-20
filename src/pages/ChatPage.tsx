import { useState } from "react";

import SelectTagModal from "@/components/Chat/SelectTagModal";
import Header from "@/components/common/Header/Header";

import { chatStyle } from "@/pages/ChatPage.style";

const userData = { profile: "picture", nickName: "피자냠냠", habit: "자격증 공부하기" };

const ChatData = {
	firstMeet: [
		`반가워요 ${userData.profile}님! 저는 습관 형성 도우미 Tars에요 :)`,
		"어떤 습관을 함께 만들어 볼까요?",
		"매일 해도 무리 없는 쉬운 것부터 시작하기를 추천해요 😊",
	],
	habit: [
		"그렇군요!",
		"이번엔 정체성을 정해 볼게요",
		`${userData.habit}를(을) 통해서 ${userData.nickName}님은 어떤 사람이 되고 싶으세요?
		`,
	],
};

const habitTags = [
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
];

function ChatPage() {
	const [percentage, setPercentage] = useState(100 / 12);

	// progress 퍼센티지 향상을 위한 함수
	const handleProgress = () => {
		if (percentage < 99) setPercentage(percentage + 100 / 12);
	};

	return (
		<div css={chatStyle.container}>
			<Header>
				<Header.PrevButton></Header.PrevButton>
			</Header>
			<div css={chatStyle.progress(percentage)}>
				<div></div>
			</div>
			<div css={chatStyle.chat}>
				<div css={chatStyle.dev}>
					<div>
						<img src="" alt="profile" />
					</div>
					<ul>
						{ChatData.firstMeet.map((i) => (
							<li>{i}</li>
						))}
						<button onClick={handleProgress}>습관 선택</button>
					</ul>
				</div>
				<div css={chatStyle.user}>자격증 공부하기</div>
			</div>
			<SelectTagModal title="어떤 습관을 만들어 볼까요?" tags={habitTags} />
		</div>
	);
}

export default ChatPage;
