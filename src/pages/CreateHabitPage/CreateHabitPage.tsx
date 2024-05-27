import { useEffect } from "react";

import CharacterExampleImage from "@/assets/image/img-profile-example.png";

import BehaviorModal from "@/components/Chatting/BehaviorModal";
import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import LocationModal from "@/components/common/Modal/CommonModal/LocationModal/LocationModal";
import SelectTagModal from "@/components/common/Modal/CommonModal/SelectTagModal/SelectTagModal";
import SelectTimeModal from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal";
import AlarmInput from "@/components/Habit/CreateHabitForm/AlarmInput";
import BehaviorInput from "@/components/Habit/CreateHabitForm/BehaviorInput";
import BehaviorValueInput from "@/components/Habit/CreateHabitForm/BehaviorValueInput";
import IdentityInput from "@/components/Habit/CreateHabitForm/IdentityInput";
import LocationInput from "@/components/Habit/CreateHabitForm/LocationInput";
import TimeInput from "@/components/Habit/CreateHabitForm/TimeInput";
import HabitTip from "@/components/Habit/HabitTip/HabitTip";
import StarPrizeModal from "@/components/Habit/Modal/StarPrizeModal/StarPrizeModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";
import { getUserInfo } from "@/api/user/userThunk";

import { modalType } from "@/constants/modalConstants";
import { SELECT_TAG_DATA } from "@/constants/modalConstants";

import { useHabitForm } from "@/hooks/useHabitForm";

import {
	layoutStyle,
	profileBoxStyle,
	inputListStyle,
	inputBoxStyle,
} from "@/pages/CreateHabitPage/CreateHabitPage.style";

const CreateHabitPage = () => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);
	const { userData } = useAppSelector((state) => state.user);

	const { habitRequest, isEmpty, updateInputValue, handleSubmit } = useHabitForm();

	useEffect(() => {
		dispatch(getUserInfo());
	}, []);

	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.Title>습관 약속 만들기</Header.Title>
			</Header>
			<main css={layoutStyle}>
				<div>
					<div css={profileBoxStyle}>
						<img src={CharacterExampleImage} alt="profile" />
						<div>
							<p>반가워요 {userData.nickname}님!</p>
							<p>이번엔 어떤 습관을 만들어볼까요?</p>
							<p>그래서 어떤 사람이 되고 싶으신가요?</p>
						</div>
					</div>

					<HabitTip />
				</div>

				<div css={inputListStyle}>
					<IdentityInput
						inputData={habitRequest.identity}
						handleModalOpen={() => dispatch(openModal(modalType.SELECT_IDENTITY))}
					/>
					<TimeInput
						inputData={habitRequest.runTime}
						handleModalOpen={() => dispatch(openModal(modalType.SELECT_TIME("RUNTIME")))}
					/>
					<LocationInput
						inputData={habitRequest.place}
						handleModalOpen={() => dispatch(openModal(modalType.SELECT_PLACE))}
					/>
					<BehaviorInput
						inputData={habitRequest.behavior}
						handleModalOpen={() => dispatch(openModal(modalType.SELECT_BEHAVIOR))}
					/>
					<div css={inputBoxStyle}>
						<span>얼마나</span>
						<BehaviorValueInput
							inputValueData={habitRequest.behaviorValue}
							inputUnitData={habitRequest.behaviorUnit}
							handleModalOpen={() => dispatch(openModal(modalType.SELECT_BEHAVIORUNIT))}
						/>
					</div>
					<AlarmInput
						inputData={habitRequest.firstAlert}
						handleModalOpen={() => dispatch(openModal(modalType.SELECT_TIME("FIRSTALERT")))}
					/>
					<AlarmInput
						inputData={habitRequest.secondAlert}
						handleModalOpen={() => dispatch(openModal(modalType.SELECT_TIME("SECONDALERT")))}
						isSecond
					/>
				</div>

				<FooterBtn
					text="좋아, 이대로 만들게"
					disabled={isEmpty}
					isPositionStatic
					handleBtnClick={handleSubmit}
				/>

				{modal === modalType.SELECT_IDENTITY && (
					<SelectTagModal
						title="어떤 사람이 되고 싶으세요?"
						tags={SELECT_TAG_DATA.identityTags}
						updateInputValue={updateInputValue}
					/>
				)}
				{modal === modalType.SELECT_TIME("RUNTIME") && (
					<SelectTimeModal title="시간을 선택해 주세요" updateInputValue={updateInputValue} />
				)}
				{modal == modalType.SELECT_TIME("FIRSTALERT") && (
					<SelectTimeModal
						title="1차 알림시간을 선택해 주세요"
						updateInputValue={updateInputValue}
					/>
				)}
				{modal == modalType.SELECT_TIME("SECONDALERT") && (
					<SelectTimeModal
						title="2차 알림시간을 선택해 주세요"
						updateInputValue={updateInputValue}
					/>
				)}
				{modal === modalType.SELECT_PLACE && <LocationModal updateInputValue={updateInputValue} />}
				{modal === modalType.SELECT_BEHAVIOR && (
					<SelectTagModal
						title="어떤 습관을 만들어 볼까요?"
						tags={SELECT_TAG_DATA.habitTags}
						updateInputValue={updateInputValue}
					/>
				)}
				{modal === modalType.SELECT_BEHAVIORUNIT && (
					<BehaviorModal
						behavior={habitRequest.behavior}
						prevValue={habitRequest.behaviorValue}
						prevUnit={habitRequest.behaviorUnit}
						updateInputValue={updateInputValue}
					/>
				)}
				{modal === modalType.HABIT_GENERATE && (
					<StarPrizeModal
						blueText="시작이 반!"
						comment={`더욱 ${habitRequest.identity} 사람이 되기 위한 한 걸음\n제가 ${userData.nickname}님을 응원할게요 😊`}
					/>
				)}
			</main>
		</>
	);
};

export default CreateHabitPage;
