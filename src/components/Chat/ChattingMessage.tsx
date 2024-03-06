import { useEffect, useRef, useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";

import { chattingStyle, replyStyle } from "@/components/Chat/ChattingMessage.style";

interface chatType {
	chatData: { id: string; message: string[]; replyBtnMessage: string[]; reply: string };
	setProgress: React.Dispatch<React.SetStateAction<number>>;
}

function ChattingMessage({ chatData, setProgress }: chatType) {
	const { message, replyBtnMessage, reply } = chatData;

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

	const sideBtnStyle = () => {
		if (replyBtnMessage.length === 3) return chattingStyle.sideButton;
		if (replyBtnMessage.length === 8) return chattingStyle.scrollButton;
		return null;
	};

	return (
		<div css={chattingStyle.container}>
			<div css={chattingStyle.profile}>
				<img src="" alt="profile" />
			</div>
			<div css={chattingStyle.chatWrap} ref={endOfMessagesRef}>
				<ul>
					{message.slice(0, messageIndex + 1).map((i, index) => (
						<li key={index}>{i}</li>
					))}
				</ul>
				{isreply && <div css={replyStyle}>{reply}</div>}
			</div>

			{message.length === messageIndex && (
				<div>
					{/* TODO: 버튼 배경 넣기 */}
					<div css={sideBtnStyle}>
						{replyBtnMessage.slice(1).map((item) => (
							<button>{item}</button>
						))}
					</div>
					<FooterBtn text={replyBtnMessage[0]} handleBtnClick={handleReplyBtn} isTransparent />
				</div>
			)}
		</div>
	);
}

export default ChattingMessage;
