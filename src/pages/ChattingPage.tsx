import { useState } from "react";
import { useSelector } from "react-redux";

import { css } from "@emotion/react";

import ChattingMessage from "@/components/Chatting/ChattingMessage";
import Progressbar from "@/components/Chatting/Progressbar";
import Header from "@/components/common/Header/Header";

import { RootState } from "@/api/store";

import { createChatData } from "@/constants/chatData";

import { theme } from "@/styles/theme";

// import LocationModal from "@/components/Chatting/LocationModal";
// import SelectTagModal from "@/components/Chatting/SelectTagModal";

// const habitTags = [
// 	"러닝하기",
// 	"헬스하기",
// 	"산책하기",
// 	"명상하기",
// 	"기도하기",
// 	"자기확언",
// 	"책 읽기",
// 	"신문보기",
// 	"공부하기",
// 	"블로깅",
// 	"일기작성",
// 	"소비기록",
// ];

function ChattingPage() {
	const [progress, setProgress] = useState(0);

	const userData = useSelector((state: RootState) => state.user);
	const chatData = createChatData(userData);
	const isbuttonHeiger = chatData[progress].replyBtnMessage.length > 1;
	return (
		<div>
			<div css={chattingPageStyle.container}>
				<div css={chattingPageStyle.header}>
					<Header>
						<Header.PrevButton />
					</Header>
					<Progressbar currentClicks={progress} totalClicksNeeded={10} />
				</div>
				<div css={chattingPageStyle.chattingWrap(isbuttonHeiger)}>
					{chatData.slice(0, progress + 1).map((chatData) => (
						<ChattingMessage key={chatData.id} chatData={chatData} setProgress={setProgress} />
					))}
				</div>
				{/* <LocationModal /> */}
				{/* <SelectTagModal title="어떤 습관을 만들어 볼까요?" tags={habitTags} /> */}
			</div>
		</div>
	);
}

export default ChattingPage;

const chattingPageStyle = {
	container: css`
		max-width: 22.5rem;
		margin: 0 auto;
		min-height: 100vh;
		background-color: ${theme.color.bg};
	`,
	header: css`
		position: fixed;
		top: 0;
	`,
	chattingWrap: (isbuttonHeiger: boolean) => css`
		padding: 5.75rem 1.5rem ${isbuttonHeiger ? "8.5rem" : "5.438rem"} 1.5rem;
		margin: 0 auto;
		${theme.font.body_b};
	`,
};
