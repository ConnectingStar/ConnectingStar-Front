import CharacterExampleImage from "@/assets/image/img-profile-example.png";

import BehaviorModal from "@/components/Chatting/BehaviorModal";
import LocationModal from "@/components/Chatting/LocationModal/LocationModal";
import SelectTagModal from "@/components/Chatting/SelectTagModal/SelectTagModal";
import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import SelectTimeModal from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal";
import HabitGenerateConditions from "@/components/Home/HabitGenerate/habitGenerateConditions";
import HabitTip from "@/components/Home/HabitGenerate/HabitTip/HabitTip";

import { useAppSelector } from "@/api/hooks";

import { habitGenerateConditions, identity, habit } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";

import {
	layoutStyle,
	profileBoxStyle,
	selectBoxStyle,
} from "@/components/Home/HabitGenerate/HabitGenerate.style";

function HabitGenerate() {
	const { modal } = useAppSelector((state) => state.modal);

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
						/>
					);
				})}
			</ul>
			<FooterBtn text="좋아, 이대로 만들게" isPositionStatic />
			{modal === modalType.SELECT_IDENTITY && (
				<SelectTagModal title={identity.title} tags={identity.tags} />
			)}
			{modal === modalType.SELECT_TIME && <SelectTimeModal title="시간을 선택해주세요" />}
			{modal == modalType.SELECT_ALERT1 && <SelectTimeModal title="1차 알림시간을 선택해 주세요" />}
			{modal == modalType.SELECT_ALERT2 && <SelectTimeModal title="2차 알림시간을 선택해 주세요" />}
			{modal === modalType.SELECT_LOCATION && <LocationModal />}
			{modal === modalType.SELECT_REASON && (
				<SelectTagModal title={habit.title} tags={habit.tags} />
			)}
			{modal === modalType.SELECT_BEHAVIOR && <BehaviorModal />}
		</main>
	);
}

export default HabitGenerate;
