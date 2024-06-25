import { useEffect, useRef, useState } from "react";

import ProfileImg from "@/assets/image/img-profile-example.png";

import FooterSideBtn from "@/components/Chatting/ChattingMessage/FooterSideBtn";
import FooterBtn from "@/components/common/FooterBtn/FooterBtn";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";
import { postOnboarding } from "@/api/user/userThunk";

import { theme } from "@/styles/theme";

import {
	container,
	chatWrap,
	userMessageStyle,
} from "@/components/Chatting/ChattingMessage/ChattingMessage.style";
interface chattingType {
	chatData: {
		id: string;
		botMessage: string[];
		bottomButton: string[];
		userMessage: string;
		modalType?: (string | null)[];
	};
	progress: number;
	addProgress: () => void;
}

function ChattingMessage({ chatData, progress, addProgress }: chattingType) {
	const dispatch = useAppDispatch();

	const endOfMessagesRef = useRef<HTMLDivElement>(null);

	const { userData } = useAppSelector((state) => state.user);

	const { botMessage, bottomButton, userMessage, modalType } = chatData;

	const [botMessageIndex, setBotMessageIndex] = useState(0);
	const [isUserMessage, setIsUserMessage] = useState(false);

	// 버튼여러개라면 답글 먼저보이게하기
	useEffect(() => {
		if (!modalType) return;
		if (modalType.length > 1) setIsUserMessage(true);
	}, []);

	useEffect(() => {
		// 자동 스크롤 다운
		if (!endOfMessagesRef.current) return;
		endOfMessagesRef.current.scrollIntoView();

		// 메시지 하나씩 내려오게하는 코드
		const timer = setTimeout(() => {
			if (botMessage.length > botMessageIndex) {
				setBotMessageIndex((prevIndex) => prevIndex + 1);
			}
		}, 100);

		return () => clearTimeout(timer);
	}, [botMessageIndex]);

	// 봇메시지 다 보여진 후 유저메시지 보이게하기
	useEffect(() => {
		botMessage.length === botMessageIndex && setIsUserMessage(true);
		setBotMessageIndex((prev) => prev + 1);
	}, [progress]);

	// 버튼함수
	const handleButton = () => {
		if (!modalType || modalType[0] === null) {
			addProgress();
		} else if (modalType) {
			dispatch(openModal(modalType[0]));
		}

		chatData.id === "last" && dispatch(postOnboarding(userData));
	};

	return (
		<div css={container}>
			<img src={ProfileImg} alt="profile" />
			<div css={chatWrap} ref={endOfMessagesRef}>
				<ul>
					{botMessage.slice(0, botMessageIndex + 1).map((message) => (
						<li key={message} dangerouslySetInnerHTML={{ __html: message }} />
					))}
				</ul>

				{isUserMessage && (
					<div css={userMessageStyle} dangerouslySetInnerHTML={{ __html: userMessage }} />
				)}
			</div>

			{botMessage.length === botMessageIndex && (
				<>
					<FooterSideBtn bottomButton={bottomButton} modalType={modalType} />
					<FooterBtn
						text={bottomButton[0]}
						handleBtnClick={handleButton}
						isTransparent
						buttonColor={theme.color.main_deep_blue}
					/>
				</>
			)}
		</div>
	);
}

export default ChattingMessage;
