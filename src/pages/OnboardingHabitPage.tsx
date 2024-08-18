import { useEffect, useState } from "react";

import { css } from "@emotion/react";

import BehaviorModal from "@/components/Chatting/BehaviorModal";
import ChattingMessage from "@/components/Chatting/ChattingMessage/ChattingMessage";
import Header from "@/components/common/Header/Header";
import LocationModal from "@/components/common/Modal/CommonModal/LocationModal/LocationModal";
import SelectTagModal from "@/components/common/Modal/CommonModal/SelectTagModal/SelectTagModal";
import SelectTimeModal from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal";
import SuccessGuideModal from "@/components/common/Modal/CommonModal/SuccessGuideModal/SuccessGuideModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getOnlyUserInfo } from "@/api/user/userThunk";

import { createChatData } from "@/constants/chatData";
import { modalType } from "@/constants/modalConstants";
import { SELECT_TAG_DATA } from "@/constants/modalConstants";

import { useHabitForm } from "@/hooks/useHabitForm";

import { theme } from "@/styles/theme";

const OnboardingHabitPage = () => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);
	const { userInfo } = useAppSelector((state) => state.user);

	const { habitRequest, updateInputValue, handleSubmit } = useHabitForm({ isOnboarding: true });

	const chatData = createChatData(habitRequest, userInfo?.nickname);

	const [progress, setProgress] = useState(0);

	const isExtraBtn = chatData && chatData[progress].bottomButton.length > 1;

	useEffect(() => {
		dispatch(getOnlyUserInfo());
	}, []);

	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>

			<progress css={progressStyle} value={progress + 1} max={11} />

			<div css={containerStyle}>
				<div css={wrap(isExtraBtn)}>
					{chatData &&
						chatData
							.slice(0, progress + 1)
							.map((chatData) => (
								<ChattingMessage
									key={chatData.id}
									chatData={chatData}
									progress={progress}
									addProgress={() => setProgress((prev) => prev + 1)}
									handleSubmit={handleSubmit}
								/>
							))}
				</div>
			</div>

			{modal === modalType.SELECT_BEHAVIOR && (
				<SelectTagModal
					type="behavior"
					tags={SELECT_TAG_DATA.behaviorTags}
					progress={progress}
					addprogress={() => setProgress((prev) => prev + 1)}
					prevValue={habitRequest.action}
					updateInputValue={updateInputValue}
				/>
			)}
			{modal === modalType.SELECT_IDENTITY && (
				<SelectTagModal
					type="identity"
					tags={SELECT_TAG_DATA.identityTags}
					progress={progress}
					addprogress={() => setProgress((prev) => prev + 1)}
					prevValue={habitRequest.identity}
					updateInputValue={updateInputValue}
				/>
			)}
			{modal === modalType.SELECT_TIME("RUNTIME") && (
				<SelectTimeModal
					title="시간을 선택해 주세요"
					progress={progress}
					addprogress={() => setProgress((prev) => prev + 1)}
					updateInputValue={updateInputValue}
					runTime={habitRequest.runTime}
				/>
			)}
			{modal === modalType.SELECT_PLACE && (
				<LocationModal
					progress={progress}
					addprogress={() => setProgress((prev) => prev + 1)}
					prevValue={habitRequest.place}
					updateInputValue={updateInputValue}
				/>
			)}
			{modal === modalType.SELECT_BEHAVIORUNIT && (
				<BehaviorModal
					behavior={habitRequest.action}
					progress={progress}
					addprogress={() => setProgress((prev) => prev + 1)}
					prevValue={habitRequest.value}
					prevUnit={habitRequest.unit}
					updateInputValue={updateInputValue}
				/>
			)}
			{modal === modalType.SELECT_TIME("FIRSTALERT") && (
				<SelectTimeModal title="1차 알림시간을 선택해 주세요" runTime={habitRequest.runTime} />
			)}
			{modal === modalType.SELECT_TIME("SECONDALERT") && (
				<SelectTimeModal title="2차 알림시간을 선택해 주세요" runTime={habitRequest.runTime} />
			)}
			{modal === modalType.SUCCESS_GUIDE && (
				<SuccessGuideModal
					title="시작이 반!"
					content={`환영의 의미로 7개의 별을 준비했어요.\n별을 별자리에 넣어보러 갈까요?`}
				/>
			)}
		</>
	);
};

export default OnboardingHabitPage;

const containerStyle = css`
	width: 100%;
	max-width: 500px; // TODO: globalStyle max-width와 동일(추후 600으로 변경 필요)
	background-color: ${theme.color.bg};
`;

const wrap = (isExtraBtn?: boolean) => css`
	max-width: 22.5rem;
	min-height: 100vh;
	padding: 5.75rem 1.5rem ${isExtraBtn ? "8.5rem" : "5.438rem"} 1.5rem;
	margin: 0 auto;
	${theme.font.body_b};
`;

const progressStyle = css`
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	max-width: 500px; // TODO: globalStyle max-width와 동일(추후 600으로 변경 필요)
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
