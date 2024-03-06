import { useState } from "react";
import { useSelector } from "react-redux";

import ChattingMessage from "@/components/Chat/ChattingMessage";
import Progressbar from "@/components/Chat/Progressbar";
import Header from "@/components/common/Header/Header";

import { RootState } from "@/api/store";

import { createChatData } from "@/constants/chatData";

import { chattingPageStyle } from "@/pages/ChattingPage.style";

function ChattingPage() {
	const [progress, setProgress] = useState(0);

	const userData = useSelector((state: RootState) => state.userData);
	const chatData = createChatData(userData);
	const isbuttonHeiger = chatData[progress].replyBtnMessage.length > 1;

	return (
		<div css={chattingPageStyle.container}>
			<div css={chattingPageStyle.header}>
				<Header>
					<Header.PrevButton></Header.PrevButton>
				</Header>
				<Progressbar currentClicks={progress} totalClicksNeeded={11} />
			</div>
			<div css={chattingPageStyle.chattingWrap(isbuttonHeiger)}>
				{chatData.slice(0, progress + 1).map((chatData) => (
					<ChattingMessage
						key={chatData.id}
						chatData={chatData}
						setProgress={setProgress}
					></ChattingMessage>
				))}
			</div>
		</div>
	);
}

export default ChattingPage;
