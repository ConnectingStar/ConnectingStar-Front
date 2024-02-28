import { useState } from "react";

import ChattingMessage from "@/components/Chat/ChattingMessage";
import Progressbar from "@/components/Chat/Progressbar";
import Header from "@/components/common/Header/Header";

import { chatData } from "@/constants/chatData";

import { chattingPageStyle } from "@/pages/ChattingPage.style";

// TODO: 나중에 초기화
export const userDataFrame = {
	nickName: "닉네임",
	habit: "습관",
	identity: "정체성",
	time: "오후 10:00",
	location: "집 앞 산책로",
	action: "5장",
	alert1: "오후 09:50",
	alert2: "오후 10:10",
};

function ChattingPage() {
	const [progress, setProgress] = useState(0);

	//TODO: reply 변경하기
	return (
		<div css={chattingPageStyle.container}>
			<div css={chattingPageStyle.header}>
				<Header>
					<Header.PrevButton></Header.PrevButton>
				</Header>
				<Progressbar currentClicks={progress} totalClicksNeeded={11} />
			</div>
			<div css={chattingPageStyle.chattingWrap}>
				{chatData.slice(0, progress + 1).map((userData) => (
					<ChattingMessage
						key={userData.id}
						userData={userData}
						reply={userDataFrame.habit}
						setProgress={setProgress}
					></ChattingMessage>
				))}
			</div>
		</div>
	);
}

export default ChattingPage;
