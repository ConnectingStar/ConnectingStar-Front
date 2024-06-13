import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import InfoIcon from "@/assets/icon/ic-blue-exclamation-mark.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import StarPrizeModal from "@/components/Habit/Modal/StarPrizeModal/StarPrizeModal";

import { getHabit } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";
import { getUserInfo } from "@/api/user/userThunk";

import { prizeComments } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";
import { habitIconData } from "@/constants/mypage";

import {
	layoutStyle,
	contentBoxStyle,
	contentTitleBoxStyle,
	iconStyle,
	inputBoxStyle,
	identityBoxStyle,
} from "@/components/Habit/HabitRecord/HabitRecord.style";

function HabitRecord() {
	const dispatch = useAppDispatch();

	const { userData } = useAppSelector((state) => state.user);
	const { habit } = useAppSelector((state) => state.habit);
	const { modal } = useAppSelector((state) => state.modal);

	const params = useParams();

	// 임시로 랜덤요소를 통해 멘트에 변화를 주고 있음. 나중에 api 추가되면 수정할 예정
	const Random = Math.floor(Math.random() * 10) % prizeComments.length;
	const { blueText, yellowText, comment } = prizeComments[Random];

	const [traceText, setTraceText] = useState<string>("");
	const [isActivated] = useState<boolean>(false);
	const [selectedIcon, setSelectedIcon] = useState<number | null>(null);

	const handleIconClick = (id: number) => {
		if (id !== selectedIcon) {
			setSelectedIcon(id);
		} else {
			setSelectedIcon(null);
		}
	};

	useEffect(() => {
		dispatch(getUserInfo());
		dispatch(getHabit(Number(params.habitId)));
	}, []);

	if (!habit) {
		return <div />;
	}

	return (
		<main css={layoutStyle}>
			<h1>{`${params.month}월 ${params.date}일\n${userData.nickname}님의 실천 기록`}</h1>
			<div css={identityBoxStyle}>
				<h3>정체성</h3>
				<span>{habit.identity} 사람</span>
			</div>

			<div css={contentBoxStyle}>
				<div css={contentTitleBoxStyle}>
					<h3>나는</h3>
					<InfoIcon />
					<span>약속대로 실천했다면 얼마나 했는지만 적으면 돼요 :)</span>
				</div>

				<ul>
					<li>
						<input
							placeholder={`${habit.runTime.noon} ${habit.runTime.hour}시 ${habit.runTime.minute}분에`}
						/>
					</li>
					<li>
						<input placeholder={`${habit.place}애서`} />
					</li>
					<li>
						<input placeholder={`${habit.behavior}를`} />
					</li>
					<li>
						<input />
						<span>{habit.behaviorUnit}</span>
					</li>
				</ul>
				<h3>했다</h3>
			</div>

			<section css={iconStyle(isActivated, selectedIcon)}>
				<h2>오늘의 습관 실천을 어떠셨나요?</h2>
				<div>
					{habitIconData.map((habitIcon) => (
						<span
							key={habitIcon.id}
							onClick={() => handleIconClick(habitIcon.id)}
							className={habitIcon.id === selectedIcon ? "selected" : ""}
						>
							{habitIcon.icon}
						</span>
					))}
				</div>
			</section>
			<section css={inputBoxStyle(isActivated, selectedIcon)}>
				<label htmlFor="traceText">별자취 남기기</label>
				<textarea
					placeholder="실천하며 느낀 점이나 다짐 등을 자유롭게 적어보세요!"
					maxLength={1000}
					id="traceText"
					value={traceText}
					onChange={(e) => setTraceText(e.target.value)}
				/>
				<span>{traceText.length}/1,000자</span>
			</section>
			<FooterBtn
				handleBtnClick={() => dispatch(openModal(modalType.STAR_PRIZE))}
				text="기록하여 별 얻기"
				disabled={!isActivated || !selectedIcon}
			/>
			{modal === modalType.STAR_PRIZE && (
				<StarPrizeModal
					isHabitStart
					blueText={blueText}
					yellowText={yellowText}
					comment={comment}
				/>
			)}
		</main>
	);
}

export default HabitRecord;
