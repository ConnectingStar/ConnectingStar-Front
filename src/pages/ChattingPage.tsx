import { useState } from "react";

import { css } from "@emotion/react";

import ChattingMessage from "@/components/Chat/ChattingMessage";
import Progressbar from "@/components/Chat/Progressbar";
// import SelectTagModal from "@/components/Chat/SelectTagModal";
import Header from "@/components/common/Header/Header";

import { chatData } from "@/constants/chatData";

import { theme } from "@/styles/theme";
// import { habitTags } from "@/constants/habitTags";

const chatStyle = css`
	max-width: 360px;
	margin: 0 auto;
`;

const chattingContainer = css`
	padding: 2rem 1.5rem 1rem 1.5rem;
	margin: 0 auto;
	background-color: ${theme.color.bg};
	min-height: 100vh;
	height: 100%;
	${theme.font.body_b};
`;

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
	const progressProps: [number, React.Dispatch<React.SetStateAction<number>>] = [
		progress,
		setProgress,
	];

	console.log(chatData);

	//TODO: reply 변경하기
	return (
		<div css={chatStyle}>
			<Header>
				<Header.PrevButton></Header.PrevButton>
			</Header>
			<Progressbar currentClicks={progress} totalClicksNeeded={11} />

			<div css={chattingContainer}>
				{chatData.slice(0, progress + 1).map((userData) => (
					<ChattingMessage
						key={userData.id}
						userData={userData}
						reply={userDataFrame.habit}
						progressProps={progressProps}
					></ChattingMessage>
				))}
			</div>
			{/* {isReply && (
				<SelectTagModal
					title="어떤 습관을 만들어 볼까요?"
					tags={habitTags}
					setUserData={setUserData}
				/>
			)} */}
		</div>
	);
}

export default ChattingPage;
