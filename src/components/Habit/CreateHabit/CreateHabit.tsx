// import { useState } from "react";

import CharacterExampleImage from "@/assets/image/img-profile-example.png";

import BehaviorModal from "@/components/Chatting/BehaviorModal";
import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import LocationModal from "@/components/common/Modal/CommonModal/LocationModal/LocationModal";
import SelectTagModal from "@/components/common/Modal/CommonModal/SelectTagModal/SelectTagModal";
import SelectTimeModal from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal";
import HabitGenerateConditions from "@/components/Habit/CreateHabit/habitGenerateConditions";
import HabitTip from "@/components/Habit/CreateHabit/HabitTip/HabitTip";
import StarPrizeModal from "@/components/Habit/Modal/StarPrizeModal/StarPrizeModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { habitGenerateConditions, identity, habit } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";

import {
	layoutStyle,
	profileBoxStyle,
	selectBoxStyle,
} from "@/components/Habit/CreateHabit/CreateHabit.style";

const CreateHabit = () => {
	const dispatch = useAppDispatch();
	const { modal } = useAppSelector((state) => state.modal);

	// const [modalTitle, setModalTitle] = useState("시간을 선택해 주세요");

	// const handleClick = (modalName: string, placeholderText: string) => {
	// 	dispatch(openModal(modalName));
	// 	if (modalName === modalType.SELECT_TIME) {
	// 		setModalTitle(placeholderText);
	// 	}
	// };

	return (
		<main css={layoutStyle}>
			<div>
				<div css={profileBoxStyle}>
					<img src={CharacterExampleImage} alt="profile" />
					<div>
						<p>반가워요 닉네임님!</p>
						<p>이번엔 어떤 습관을 만들어볼까요?</p>
						<p>그래서 어떤 사람이 되고 싶으신가요?</p>
					</div>
				</div>

				<HabitTip />
			</div>

			<ul css={selectBoxStyle}>
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
			</ul>

			<FooterBtn
				text="좋아, 이대로 만들게"
				isPositionStatic
				handleBtnClick={() => dispatch(openModal(modalType.HABIT_GENERATE))}
			/>

			{modal === modalType.SELECT_IDENTITY && (
				<SelectTagModal title={identity.title} tags={identity.tags} />
			)}
			{modal === modalType.SELECT_TIME("RUNTIME") && (
				<SelectTimeModal title="시간을 선택해 주세요" />
			)}
			{modal == modalType.SELECT_TIME("FIRSTALERT") && (
				<SelectTimeModal title="1차 알림시간을 선택해 주세요" />
			)}
			{modal == modalType.SELECT_TIME("SECONDALERT") && (
				<SelectTimeModal title="2차 알림시간을 선택해 주세요" />
			)}
			{modal === modalType.SELECT_PLACE && <LocationModal />}
			{modal === modalType.SELECT_REASON && (
				<SelectTagModal title={habit.title} tags={habit.tags} />
			)}
			{modal === modalType.SELECT_BEHAVIOR && <BehaviorModal />}

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
