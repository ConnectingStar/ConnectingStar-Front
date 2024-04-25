import { useState } from "react";
import { useSelector } from "react-redux";

import { css } from "@emotion/react";

// import BehaviorModal from "@/components/Chatting/BehaviorModal";
import ChattingMessage from "@/components/Chatting/ChattingMessage";
// import SelectTagModal from "@/components/Chatting/SelectTagModal/SelectTagModal";
// import LocationModal from "@/components/Chatting/LocationModal/LocationModal";
import Header from "@/components/common/Header/Header";
import SelectTimeModal from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal";

import { RootState } from "@/api/store";

import { createChatData } from "@/constants/chatData";

import { theme } from "@/styles/theme";
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
	const extraBtnHeight = chatData[progress].replyBtnMessage.length > 1;

	console.log(userData);

	return (
		<div>
			<Header>
				<Header.PrevButton />
			</Header>
			<progress css={chattingPageStyle.progress} value={progress + 1} max={11} />
			<div css={chattingPageStyle.container}>
				<div css={chattingPageStyle.chattingWrap(extraBtnHeight)}>
					{chatData.slice(0, progress + 1).map((chatData) => (
						<ChattingMessage key={chatData.id} chatData={chatData} setProgress={setProgress} />
					))}
				</div>
				{/* <BehaviorModal /> */}
				{/* <LocationModal /> */}
				{/* <SelectTagModal title="어떤 습관을 만들어 볼까요?" tags={habitTags} /> */}
				<SelectTimeModal title="시간을 선택해 주세요"></SelectTimeModal>
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

	chattingWrap: (isbuttonHeiger: boolean) => css`
		padding: 5.75rem 1.5rem ${isbuttonHeiger ? "8.5rem" : "5.438rem"} 1.5rem;
		margin: 0 auto;
		${theme.font.body_b};
	`,

	progress: css`
		position: fixed;
		left: 50%;
		transform: translate(-50%);
		width: 22.5rem;
		padding-top: 3.5rem;
		appearance: none;
		::-webkit-progress-bar {
			background: white;
			height: 4px;
			overflow: hidden;
		}
		::-webkit-progress-value {
			background: ${theme.color.main_blue};
		}
	`,
};
