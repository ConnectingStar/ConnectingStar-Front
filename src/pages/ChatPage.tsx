import { useEffect, useState } from "react";

import Progressbar from "@/components/Chat/Progressbar";
import SelectTagModal from "@/components/Chat/SelectTagModal";
import Header from "@/components/common/Header/Header";

import { chatData } from "@/constants/chatData";
import { habitTags } from "@/constants/habitTags";

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
	const [percentage, setPercentage] = useState(100 / 12);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [userData, setUserData] = useState(userDataFrame);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isModal, setIsModal] = useState(false);
	const [messageIndex, setMessageIndex] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (chatData[0].text.length > messageIndex) {
				setMessageIndex((prevIndex) => prevIndex + 1);
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [messageIndex]);

	console.log(messageIndex);

	// progress 퍼센티지 향상을 위한 함수
	const handleProgress = () => {
		if (percentage < 99) setPercentage(percentage + 100 / 12);
		// setIsModal(true);
	};

	return (
		<div css={chatStyle.container}>
			<Header>
				<Header.PrevButton></Header.PrevButton>
			</Header>
			<Progressbar percentage={percentage} />
			<button onClick={handleProgress}>진행버튼</button>
			<div css={chatStyle.chat}>
				<div css={chatStyle.dev}>
					<div>
						<img src="" alt="profile" />
					</div>
					<ul>
						{chatData[0].text.slice(0, messageIndex + 1).map((i, index) => (
							<li key={index}>{i}</li>
						))}
						{chatData[0].text.length === messageIndex && (
							<button onClick={handleProgress}>습관 선택</button>
						)}
					</ul>
				</div>
				<div css={chatStyle.user}>자격증 공부하기</div>
			</div>
			{isModal && (
				<SelectTagModal
					title="어떤 습관을 만들어 볼까요?"
					tags={habitTags}
					setUserData={setUserData}
				/>
			)}
		</div>
	);
}

export default ChatPage;
