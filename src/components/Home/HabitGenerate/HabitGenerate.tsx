import { useState } from "react";

import BlueExplanationMarkIcon from "@/assets/icon/ic-blue-exclamation-mark.svg?react";
import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";
import RoundCloseButtonIcon from "@/assets/icon/ic-round-close-button.svg?react";
import StarImage from "@/assets/image/img-card-detail-star-button.png";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import {
	layoutStyle,
	profileBoxStyle,
	tipBoxStyle,
	textBoxStyle,
	selectBoxStyle,
} from "@/components/Home/HabitGenerate/HabitGenerate.Style";
import SelectTimeModal from "@/components/Home/Landing/Modal/SelectTimeModal";
import SelectCharacterModal from "@/components/MyPage/Modal/SelectCharacterModal/SelectCharacterModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { habitGenerateConditionsArray } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";

function HabitGenerate() {
	const dispatch = useAppDispatch();
	const { modal } = useAppSelector((state) => state.modal);

	const [isTip, setIsTip] = useState<boolean>(false);
	return (
		<main css={layoutStyle}>
			<section>
				<div css={profileBoxStyle}>
					<img src={StarImage} alt="임시" />
					<div>
						<span>{`반가워요 닉네임님!\n`}</span>
						<span>{`이번엔 어떤 습관을 만들어볼까요?\n그래서 어떤 사람이 되고 싶으신가요?`}</span>
					</div>
				</div>

				<div css={tipBoxStyle}>
					<label onClick={() => setIsTip(!isTip)}>{`좋은 습관 Tip`}</label>
					{isTip && (
						<div css={textBoxStyle}>
							<div>
								<span className="bold">{`1. 일단 쉬워야 해요.\n`}</span>
								<span>{`쉬워야 반복할 수 있기 때문이에요.\n\n`}</span>
								<span className="bold">{`2. 만족스럽기까지 하면 최고!\n`}</span>
								<span>{`매력적이고 만족스러워야 계속하고 싶으니까요.\n`}</span>
							</div>
							<button onClick={() => setIsTip(false)}>
								<RoundCloseButtonIcon />
							</button>
						</div>
					)}
				</div>
			</section>
			<ul css={selectBoxStyle}>
				{habitGenerateConditionsArray.map((condition) => {
					return (
						<li
							key={condition.LABEL_TEXT}
							onClick={() => {
								dispatch(openModal(condition.MODAL_NAME));
							}}
						>
							<label>
								<span>{condition.LABEL_TEXT}</span>
								{condition.EXPLANATION && (
									<>
										<BlueExplanationMarkIcon />
										<span>{condition.EXPLANATION}</span>
									</>
								)}
							</label>

							<div className={condition.SPAN_TEXT_SECOND ? "divided" : "combined"}>
								<span>{condition.SPAN_TEXT}</span>
								{condition.SPAN_TEXT_SECOND ? (
									<span> {condition.SPAN_TEXT_SECOND}</span>
								) : (
									<DownArrowIcon />
								)}
							</div>
						</li>
					);
				})}
			</ul>
			<FooterBtn text="좋아, 이대로 만들게" isPositionStatic />
			{modal === modalType.SELECT_TIME && <SelectTimeModal />}
			{modal === modalType.SELECT_CHARACTER && <SelectCharacterModal />}
		</main>
	);
}

export default HabitGenerate;
