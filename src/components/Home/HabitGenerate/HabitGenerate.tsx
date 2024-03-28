import { useState } from "react";

import BlueExplanationMarkIcon from "@/assets/icon/ic-blue-exclamation-mark.svg?react";
import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";
import RoundCloseButtonIcon from "@/assets/icon/ic-round-close-button.svg?react";
import StarImage from "@/assets/image/img-card-detail-star-button.png";

import LocationModal from "@/components/Chatting/LocationModal/LocationModal";
import SelectTagModal from "@/components/Chatting/SelectTagModal/SelectTagModal";
import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import {
	layoutStyle,
	profileBoxStyle,
	tipBoxStyle,
	selectBoxStyle,
} from "@/components/Home/HabitGenerate/HabitGenerate.Style";
// import SelectTimeModal from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal";

import { useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { habitGenerateConditions } from "@/constants/homeConstants";
import { identity, habit } from "@/constants/homeConstants";
// import { modalType } from "@/constants/modalConstants";

interface Modals {
	selectIdentity?: boolean;
	location?: boolean;
	selectHabit?: boolean;
	[modalName: string]: boolean | undefined;
}

function HabitGenerate() {
	const dispatch = useAppDispatch();
	// const { modal } = useAppSelector((state) => state.modal);
	// const [timeModalTitle, setTimeModalTitle] = useState("시간을 선택해 주세요");
	const [isTip, setIsTip] = useState<boolean>(false);

	// 임시
	const [modals, setModals] = useState<Modals>({
		selectIdentity: false,
		location: false,
		selectHabit: false,
	});

	const handleClick = (modalName: string, placeText: string) => {
		dispatch(openModal(modalName));

		console.log(placeText);
		// if (modalName === modalType.SELECT_TIME) {
		// 	setTimeModalTitle(placeText);
		// }

		if (modals[modalName] !== undefined) {
			setModals({ ...modals, [modalName]: true });
			setTimeout(() => {
				setModals({ ...modals, [modalName]: false });
			}, 8000);
		}
	};

	return (
		<main css={layoutStyle}>
			<div>
				<div css={profileBoxStyle}>
					<img src={StarImage} alt="임시" />
					<div>
						<span>{`반가워요 {닉네임}님!\n`}</span>
						<span>{`이번엔 어떤 습관을 만들어볼까요?\n그래서 어떤 사람이 되고 싶으신가요?`}</span>
					</div>
				</div>

				<div css={tipBoxStyle}>
					<div onClick={() => setIsTip(!isTip)}>{`좋은 습관 Tip`}</div>
					{isTip && (
						<div>
							<div>
								<span>{`1. 일단 쉬워야 해요.\n`}</span>
								<span>{`쉬워야 반복할 수 있기 때문이에요.`}</span>
							</div>
							<div>
								<span>{`2. 만족스럽기까지 하면 최고!\n`}</span>
								<span>{`매력적이고 만족스러워야 계속하고 싶으니까요.`}</span>
							</div>

							<RoundCloseButtonIcon onClick={() => setIsTip(false)} />
						</div>
					)}
				</div>
			</div>

			<ul css={selectBoxStyle}>
				{habitGenerateConditions.map((condition) => {
					const { SUBTITLE_TEXT, EXPLANATION, PLACE_TEXT, PLACE_TEXT_SECOND, MODAL_NAME } =
						condition;
					return (
						<li key={SUBTITLE_TEXT} onClick={() => handleClick(MODAL_NAME, PLACE_TEXT)}>
							<div>
								<span>{SUBTITLE_TEXT}</span>
								{EXPLANATION && (
									<>
										<BlueExplanationMarkIcon />
										<span>{EXPLANATION}</span>
									</>
								)}
							</div>
							<div className={PLACE_TEXT_SECOND ? "divided" : "combined"}>
								<span>{PLACE_TEXT}</span>
								{PLACE_TEXT_SECOND ? <span> {PLACE_TEXT_SECOND}</span> : <DownArrowIcon />}
							</div>
						</li>
					);
				})}
			</ul>
			<FooterBtn text="좋아, 이대로 만들게" isPositionStatic />
			{/* {modal === modalType.SELECT_TIME && <SelectTimeModal title={timeModalTitle} />} */}
			{modals.selectIdentity && <SelectTagModal title={identity.title} tags={identity.tags} />}
			{modals.selectHabit && <SelectTagModal title={habit.title} tags={habit.tags} />}
			{modals.location && <LocationModal />}
		</main>
	);
}

export default HabitGenerate;
