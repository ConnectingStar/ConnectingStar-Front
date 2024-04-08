import CharacterExampleImage from "@/assets/image/img-profile-example.png";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
// import SelectTimeModal from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal";
import HabitGenerateConditions from "@/components/Home/HabitGenerate/habitGenerateConditions";
import HabitTip from "@/components/Home/HabitGenerate/HabitTip";

import { habitGenerateConditions } from "@/constants/homeConstants";

import {
	layoutStyle,
	profileBoxStyle,
	selectBoxStyle,
} from "@/components/Home/HabitGenerate/HabitGenerate.style";

// import { modalType } from "@/constants/modalConstants";

function HabitGenerate() {
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
			{/* {modal === modalType.SELECT_TIME && <SelectTimeModal title={timeModalTitle} />} */}
		</main>
	);
}

export default HabitGenerate;
