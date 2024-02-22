import { ReactNode, useEffect, useState } from "react";

import { chatStyle, container, replyStyle } from "./Chat.style";

interface chatType {
	message: string[];
	reply: string;
	percentageProps: [number, React.Dispatch<React.SetStateAction<number>>];
	isReplyProps: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

function Chat({ children }: { children: ReactNode }) {
	return <div css={chatStyle}>{children}</div>;
}

export default Chat;

Chat.Message = function ChattingMessage({
	message,
	reply,
	percentageProps,
	isReplyProps,
}: chatType) {
	const [percentage, setPercentage] = percentageProps;
	const [isReply, setIsReply] = isReplyProps;
	const [messageIndex, setMessageIndex] = useState(0);
	useEffect(() => {
		const timer = setTimeout(() => {
			if (message.length > messageIndex) {
				setMessageIndex((prevIndex) => prevIndex + 1);
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [messageIndex]);
	console.log(message);

	// progress 퍼센티지 향상을 위한 함수
	const handleProgress = () => {
		if (percentage < 99) setPercentage(percentage + 100 / 12);
		setIsReply(true);
		setMessageIndex((prevIndex) => prevIndex + 1);
	};

	return (
		<div css={container}>
			<div>
				<img src="" alt="profile" />
			</div>
			<ul>
				{message.slice(0, messageIndex + 1).map((i, index) => (
					<li key={index} className="message-item">
						{i}
					</li>
				))}
				{message.length === messageIndex && <button onClick={handleProgress}>습관 선택</button>}
				{isReply && <div css={replyStyle}>{reply}</div>}
			</ul>
		</div>
	);
};
