import { useEffect, useRef, useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";

import { theme } from "@/styles/theme";

import { chattingStyle, replyStyle } from "@/components/Chatting/ChattingMessage.style";

interface chatType {
	chatData: { id: string; message: string[]; replyBtnMessage: string[]; reply: string };
	setProgress: React.Dispatch<React.SetStateAction<number>>;
}

function ChattingMessage({ chatData, setProgress }: chatType) {
	const { id, message, replyBtnMessage, reply } = chatData;

	const [messageIndex, setMessageIndex] = useState(0);
	const [isreply, setIsReply] = useState(false);
	const endOfMessagesRef = useRef<HTMLDivElement>(null);

	// 메시지 하나씩 내려오게하는 함수
	useEffect(() => {
		const timer = setTimeout(() => {
			if (message.length > messageIndex) {
				setMessageIndex((prevIndex) => prevIndex + 1);
			}
		}, 100);

		return () => clearTimeout(timer);
	}, [messageIndex]);

	// 스크롤다운 함수
	const scrollToBottom = () => {
		endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messageIndex]);

	// 버튼 함수
	const handleReplyBtn = () => {
		setProgress((prev) => prev + 1);
		setMessageIndex((prevIndex) => prevIndex + 1);
		setIsReply(true);
	};

	// 하단 버튼이 3개일 때 3개보다 높을 때 디자인을 달리해주는 함수
	const sideBtnStyle = () => {
		if (replyBtnMessage.length === 3) return chattingStyle.sideButton;
		if (replyBtnMessage.length > 3) return chattingStyle.scrollButton;
		return null;
	};

	// 특정 메시지의 단어 파란색으로 변경하는 함수
	function processMessage(message: string, id: string) {
		if (id === "time") {
			return message.replace(
				/(명확|매력|쉽게|만족)/g,
				(match) => `<span style="color: ${theme.color.main_blue};">${match}</span>`,
			);
		} else if (id === "last") {
			return message.replace(
				/(매일 실행|꾸준하게 하는 것)/g,
				(match) => `<span style="color: ${theme.color.main_blue};">${match}</span>`,
			);
		}
		return message;
	}

	return (
		<div css={chattingStyle.container}>
			<div css={chattingStyle.profile}>
				<img src="" alt="profile" />
			</div>

			<div css={chattingStyle.chatWrap} ref={endOfMessagesRef}>
				<ul>
					{message.slice(0, messageIndex + 1).map((msg) => (
						<li
							key={msg}
							dangerouslySetInnerHTML={{ __html: processMessage(msg, chatData.id) }}
						></li>
					))}
				</ul>

				{isreply ? (
					<div css={replyStyle} dangerouslySetInnerHTML={{ __html: reply }}></div>
				) : (
					(id === "alert" || id === "organize") && (
						<div css={replyStyle} dangerouslySetInnerHTML={{ __html: reply }}></div>
					)
				)}
			</div>

			{message.length === messageIndex && (
				<div>
					<div css={sideBtnStyle}>
						{replyBtnMessage.slice(1).map((item) => (
							<button key={item}>{item}</button>
						))}
					</div>
					<FooterBtn text={replyBtnMessage[0]} handleBtnClick={handleReplyBtn} isTransparent />
				</div>
			)}
		</div>
	);
}

export default ChattingMessage;
