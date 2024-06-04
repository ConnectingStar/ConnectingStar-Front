import { useEffect } from "react";

import CharacterExampleImage from "@/assets/image/img-profile-example.png";

import BehaviorModal from "@/components/Chatting/BehaviorModal";
import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import LocationModal from "@/components/common/Modal/CommonModal/LocationModal/LocationModal";
import SelectTagModal from "@/components/common/Modal/CommonModal/SelectTagModal/SelectTagModal";
import SelectTimeModal from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal";
// import HabitGenerateConditions from "@/components/Habit/CreateHabit/habitGenerateConditions";
import TimeInput from "@/components/Habit/CreateHabit/HabitForm//TimeInput";
import BehaviorInput from "@/components/Habit/CreateHabit/HabitForm/BehaviorInput";
import IdentityInput from "@/components/Habit/CreateHabit/HabitForm/IdentityInput";
import LocationInput from "@/components/Habit/CreateHabit/HabitForm/LocationInput";
import HabitTip from "@/components/Habit/CreateHabit/HabitTip/HabitTip";
import StarPrizeModal from "@/components/Habit/Modal/StarPrizeModal/StarPrizeModal";

import BehaviorValueInput from "./HabitForm/BehaviorValueInput";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";
import { getUserInfo } from "@/api/user/userThunk";

// import { habitGenerateConditions } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";
import { SELECT_TAG_DATA } from "@/constants/modalConstants";

import { useHabitForm } from "@/hooks/useHabitForm";

import {
	layoutStyle,
	profileBoxStyle,
	inputListStyle,
	inputBoxStyle,
} from "@/components/Habit/CreateHabit/CreateHabit.style";

const CreateHabit = () => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);
	const { userData } = useAppSelector((state) => state.user);

	const { habitRequest, updateInputValue } = useHabitForm();

	console.log(habitRequest);

	useEffect(() => {
		dispatch(getUserInfo());
	}, []);

	return (
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
			</div>

			{/* <ul css={selectListBoxStyle}>
				<li>
					<div
						onClick={() => handleClick(modalName, placeholder)}
						className={placeholderSecond ? "split" : "sticked"}
					>
						<span>{placeholder}</span>
						{placeholderSecond ? <span> {placeholderSecond}</span> : <DownArrowIcon />}
					</div>
				</li>
			</ul> */}

			{/* <ul css={selectBoxStyle}>
				{habitGenerateConditions.map((condition) => {
					const { subtitle, explanation, placeholder, placeholderSecond, modalName } = condition;
					return (
						<HabitGenerateConditions
							key={subtitle}
							subtitle={subtitle}
							explanation={explanation}
							placeholder={placeholder}
							placeholderSecond={placeholderSecond}
							modalName={modalName}
							handleClick={() => {}}
						/>
					);
				})}
			</ul> */}

			<FooterBtn
				text="좋아, 이대로 만들게"
				isPositionStatic
				handleBtnClick={() => dispatch(openModal(modalType.HABIT_GENERATE))}
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
				<SelectTimeModal title="1차 알림시간을 선택해 주세요" />
			)}
			{modal == modalType.SELECT_TIME("SECONDALERT") && (
				<SelectTimeModal title="2차 알림시간을 선택해 주세요" />
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
					comment={`더욱 {정체성한} 사람이 되기 위한 한 걸음\n제가 {닉네임}님을 응원할게요 😊`}
				/>
			)}
		</main>
	);
};

export default CreateHabit;
