import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import BehaviorModal from "@/components/Chatting/BehaviorModal";
import ChattingMessage from "@/components/Chatting/ChattingMessage";
import Header from "@/components/common/Header/Header";
import LocationModal from "@/components/common/Modal/CommonModal/LocationModal/LocationModal";
import SelectTagModal from "@/components/common/Modal/CommonModal/SelectTagModal/SelectTagModal";
import SelectTimeModal from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal";

import { useAppSelector } from "@/api/hooks";

import { createChatData } from "@/constants/chatData";
import { modalType } from "@/constants/modalConstants";
import { SELECT_TAG_DATA } from "@/constants/modalConstants";

import { theme } from "@/styles/theme";

function ChattingPage() {
	const navigate = useNavigate();

	const { modal } = useAppSelector((state) => state.modal);
	const { userData } = useAppSelector((state) => state.user);

	const chatData = createChatData(userData);

	const [progress, setProgress] = useState(0);

	const isExtraBtn = chatData[progress].replyBtnMessage.length > 1 ? true : false;

	useEffect(() => {
		const { nickname, genderType, referrer } = userData;
		if (!nickname || !genderType || !referrer) {
			navigate("/onboarding?step=CreateAccount");
		}
	}, []);

	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>

			<progress css={progressStyle} value={progress + 1} max={11} />

			<div css={container(isExtraBtn)}>
				{chatData.slice(0, progress + 1).map((chatData) => (
					<ChattingMessage
						key={chatData.id}
						chatData={chatData}
						progress={progress}
						addProgress={() => setProgress((prev) => prev + 1)}
					/>
				))}
			</div>

			{modal === modalType.SELECT_BEHAVIOR && (
				<SelectTagModal
					type="behavior"
					tags={SELECT_TAG_DATA.behaviorTags}
					progress={progress}
					addprogress={() => setProgress((prev) => prev + 1)}
				/>
			)}
			{modal === modalType.SELECT_IDENTITY && (
				<SelectTagModal
					type="identity"
					tags={SELECT_TAG_DATA.identityTags}
					progress={progress}
					addprogress={() => setProgress((prev) => prev + 1)}
				/>
			)}
			{modal === modalType.SELECT_TIME("RUNTIME") && (
				<SelectTimeModal
					title="시간을 선택해 주세요"
					progress={progress}
					addprogress={() => setProgress((prev) => prev + 1)}
				/>
			)}
			{modal === modalType.SELECT_PLACE && (
				<LocationModal progress={progress} addprogress={() => setProgress((prev) => prev + 1)} />
			)}
			{modal === modalType.SELECT_BEHAVIORUNIT && (
				<BehaviorModal
					behavior={userData.behavior}
					progress={progress}
					addprogress={() => setProgress((prev) => prev + 1)}
				/>
			)}
			{modal === modalType.SELECT_TIME("FIRSTALERT") && (
				<SelectTimeModal title="1차 알림시간을 선택해 주세요" />
			)}
			{modal === modalType.SELECT_TIME("SECONDALERT") && (
				<SelectTimeModal title="2차 알림시간을 선택해 주세요" />
			)}
		</>
	);
}

export default ChattingPage;

const container = (isExtraBtn: boolean) => css`
	max-width: 22.5rem;
	min-height: 100vh;
	padding: 5.75rem 1.5rem ${isExtraBtn ? "8.5rem" : "5.438rem"} 1.5rem;
	margin: 0 auto;
	background-color: ${theme.color.bg};
	${theme.font.body_b};
`;

const progressStyle = css`
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
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
`;
