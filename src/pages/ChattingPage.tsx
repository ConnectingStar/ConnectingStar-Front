import { useState } from "react";
import { useSelector } from "react-redux";

import { css } from "@emotion/react";

// import BehaviorModal from "@/components/Chatting/BehaviorModal";
import ChattingMessage from "@/components/Chatting/ChattingMessage";
// import SelectTagModal from "@/components/Chatting/SelectTagModal/SelectTagModal";
// import LocationModal from "@/components/Chatting/LocationModal/LocationModal";
import Header from "@/components/common/Header/Header";
import SelectTagModal from "@/components/common/Modal/CommonModal/SelectTagModal/SelectTagModal";

import { useAppSelector } from "@/api/hooks";
import { RootState } from "@/api/store";

import { createChatData } from "@/constants/chatData";
import { modalType } from "@/constants/modalConstants";
import { TagsData } from "@/constants/selectTagConstants";

import { theme } from "@/styles/theme";

function ChattingPage() {
	const [progress, setProgress] = useState(0);
	const { modal } = useAppSelector((state) => state.modal);
	const userData = useSelector((state: RootState) => state.user);
	const chatData = createChatData(userData);
	const extraBtnHeight = chatData[progress].replyBtnMessage.length > 1;

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
				{modal === modalType.SELECT_HABIT && (
					<SelectTagModal title="어떤 습관을 만들어 볼까요?" tags={TagsData.habitTags} />
				)}
				{modal === modalType.SELECT_IDENTITY && (
					<SelectTagModal title="어떤 사람이 되고 싶으세요?" tags={TagsData.identityTags} />
				)}
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
