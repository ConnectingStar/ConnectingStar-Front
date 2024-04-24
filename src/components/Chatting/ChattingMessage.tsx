import { useEffect, useRef, useState } from "react";

import ProfileImg from "@/assets/image/img-profile-example.png";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";

import { useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { chattingStyle, replyStyle } from "@/components/Chatting/ChattingMessage.style";
interface chatType {
	chatData: {
		id: string;
		message: string[];
		replyBtnMessage: string[];
		reply: string;
		modalType?: (string | null)[];
	};
	addProgress: () => void;
}

function ChattingMessage({ chatData, addProgress }: chatType) {
	const { message, replyBtnMessage, reply } = chatData;

	const [messageIndex, setMessageIndex] = useState(0);
	const [isReply, setIsReply] = useState(false);
	const endOfMessagesRef = useRef<HTMLDivElement>(null);
	const dispatch = useAppDispatch();

	// 메시지 하나씩 내려오게하는 함수
	useEffect(() => {
		const timer = setTimeout(() => {
			if (message.length > messageIndex) {
				setMessageIndex((prevIndex) => prevIndex + 1);
			}
		}, 100);

		return () => clearTimeout(timer);
	}, [messageIndex]);

	// 버튼여러개라면 답글 먼저보이게하기
	useEffect(() => {
		if (chatData.modalType === undefined) return;
		if (chatData.modalType.length > 1) setIsReply(true);
	}, []);

	// 스크롤다운 함수
	useEffect(() => {
		if (!endOfMessagesRef.current) return;
		endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
	}, [messageIndex]);

	// 버튼 함수
	const handleReplyBtn = () => {
		if (chatData.modalType === undefined) addProgress();
		if (chatData.modalType !== undefined) {
			dispatch(openModal(chatData.modalType[0]));
			if (chatData.modalType[0] === null) {
				addProgress();
			}
		}

		setMessageIndex((prevIndex) => prevIndex + 1);
		setIsReply(true);
		if (chatData.id === "last") {
			localStorage.setItem("First visit", "false");
		}
	};

	//사이드 버튼 함수
	const handleSideReplyBtn = async (index: number) => {
		if (chatData.modalType !== undefined) await dispatch(openModal(chatData.modalType[index + 1]));
	};

	return (
		<div css={chattingStyle.container}>
			<div css={chattingStyle.profile}>
				<img src={ProfileImg} alt="profile" />
			</div>
			<div css={chattingStyle.chatWrap} ref={endOfMessagesRef}>
				<ul>
					{message.slice(0, messageIndex + 1).map((msg) => (
						<li key={msg} dangerouslySetInnerHTML={{ __html: msg }} />
					))}
				</ul>

				{isReply && <div css={replyStyle} dangerouslySetInnerHTML={{ __html: reply }} />}
			</div>

			{message.length === messageIndex && (
				<div>
					{replyBtnMessage.length > 1 && (
						<div
							css={
								replyBtnMessage.length === 3 ? chattingStyle.sideButton : chattingStyle.scrollButton
							}
						>
							{replyBtnMessage.slice(1).map((item, index) => (
								<button key={item} onClick={() => handleSideReplyBtn(index)}>
									{item}
								</button>
							))}
						</div>
					)}
					<FooterBtn text={replyBtnMessage[0]} handleBtnClick={handleReplyBtn} isTransparent />
				</div>
			)}
		</div>
	);
}

export default ChattingMessage;
