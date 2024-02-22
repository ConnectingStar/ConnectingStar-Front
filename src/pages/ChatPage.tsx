import { useState } from "react";

import Chat from "@/components/Chat/Chat";
import Progressbar from "@/components/Chat/Progressbar";
// import SelectTagModal from "@/components/Chat/SelectTagModal";
import Header from "@/components/common/Header/Header";

import { chatData } from "@/constants/chatData";
// import { habitTags } from "@/constants/habitTags";

import { chatStyle } from "@/pages/ChatPage.style";

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

function ChatPage() {
	// 프로그래스 퍼센티지
	const [percentage, setPercentage] = useState(100 / 12);
	const [isReply, setIsReply] = useState(false);

	const percentageProps: [number, React.Dispatch<React.SetStateAction<number>>] = [
		percentage,
		setPercentage,
	];
	const isReplyProps: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = [
		isReply,
		setIsReply,
	];

	return (
		<div css={chatStyle.container}>
			<Header>
				<Header.PrevButton></Header.PrevButton>
			</Header>
			<Progressbar percentage={percentage} />

			{/* <Chat
				message={chatData[0].message}
				reply={userDataFrame.habit}
				percentageProps={percentageProps}
				isReplyProps={isReplyProps}
			></Chat> */}
			<Chat>
				<Chat.Message
					message={chatData[0].message}
					reply={userDataFrame.habit}
					percentageProps={percentageProps}
					isReplyProps={isReplyProps}
				></Chat.Message>
			</Chat>

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

export default ChatPage;
