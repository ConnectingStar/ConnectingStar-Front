import { useEffect, useState } from "react";

import { chattingStyle, replyStyle } from "./ChattingMessage.style";

interface chatType {
	userData: { id: string; message: string[]; replyBtnMessage: string[] };
	reply: string;
	progressProps: [number, React.Dispatch<React.SetStateAction<number>>];
}

function ChattingMessage({ userData, reply, progressProps }: chatType) {
	const { message, replyBtnMessage } = userData;

	const [, setProgress] = progressProps;
	const [messageIndex, setMessageIndex] = useState(0);
	const [isreply, setIsReply] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (message.length > messageIndex) {
				setMessageIndex((prevIndex) => prevIndex + 1);
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [messageIndex]);

	const handleReplyBtn = () => {
		setProgress((prev) => prev + 1);
		setMessageIndex((prevIndex) => prevIndex + 1);
		setIsReply(true);
	};

	return (
		<div css={chattingStyle.container}>
			<div css={chattingStyle.profile}>
				<img src="" alt="profile" />
			</div>
			<div css={chattingStyle.chatWrap}>
				<ul>
					{message.slice(0, messageIndex + 1).map((i, index) => (
						<li key={index} className="message-item">
							{i}
						</li>
					))}
					{message.length === messageIndex && (
						<button onClick={handleReplyBtn}>{replyBtnMessage}</button>
					)}
				</ul>
				{isreply && <div css={replyStyle}>{reply}</div>}
			</div>
		</div>
	);
}

export default ChattingMessage;
