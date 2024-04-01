import { useState, useRef } from "react";

import RoundCloseButtonIcon from "@/assets/icon/ic-round-close-button.svg?react";
import CharacterExampleImage from "@/assets/image/img-profile-example.png";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
// import SelectTimeModal from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal";
import SubCondition from "@/components/Home/HabitGenerate/SubCondition";

import { habitGenerateConditions } from "@/constants/homeConstants";

import useOutSideClick from "@/hooks/useOutsideClick";

import {
	layoutStyle,
	profileBoxStyle,
	tipBoxStyle,
	selectBoxStyle,
} from "@/components/Home/HabitGenerate/HabitGenerate.style";

// import { modalType } from "@/constants/modalConstants";

function HabitGenerate() {
	const tipRef = useRef(null);
	const [isOpenTip, setIsOpenTip] = useState<boolean>(false);
	useOutSideClick(tipRef, () => setIsOpenTip(false));

	// 임시

	return (
		<main css={layoutStyle}>
			<div>
				<div css={profileBoxStyle}>
					<img src={CharacterExampleImage} alt="profile" />
					<div>
						<div>{`반가워요 {닉네임}님!`}</div>
						<div>{`이번엔 어떤 습관을 만들어볼까요?`}</div>
						<div>{`그래서 어떤 사람이 되고 싶으신가요?`}</div>
					</div>
				</div>

				<div css={tipBoxStyle}>
					<div onClick={() => setIsOpenTip(!isOpenTip)}>
						<div>{`좋은 습관 Tip`}</div>
					</div>
					{isOpenTip && (
						<div ref={tipRef}>
							<div>
								<div>{`1. 일단 쉬워야 해요.`}</div>
								<div>{`쉬워야 반복할 수 있기 때문이에요.`}</div>
							</div>
							<div>
								<div>{`2. 만족스럽기까지 하면 최고!`}</div>
								<div>{`매력적이고 만족스러워야 계속하고 싶으니까요.`}</div>
							</div>

							<RoundCloseButtonIcon onClick={() => setIsOpenTip(false)} />
						</div>
					)}
				</div>
			</div>

			<ul css={selectBoxStyle}>
				{habitGenerateConditions.map((condition) => {
					const { subtitle, explanation, placeholder, placeholderSecond, modalName } = condition;
					return (
						<SubCondition
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
