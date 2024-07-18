import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import InfoIcon from "@/assets/icon/ic-blue-exclamation-mark.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import StarPrizeModal from "@/components/Habit/Modal/StarPrizeModal/StarPrizeModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getUserInfo } from "@/api/user/userThunk";

import { prizeComments } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";
import { habitIconData } from "@/constants/mypage";

import { useHabitRecordForm } from "@/hooks/useHabitRecordForm";

import type { HabitType } from "@/types/habit";

import {
	layoutStyle,
	contentBoxStyle,
	contentTitleBoxStyle,
	iconStyle,
	inputBoxStyle,
	identityBoxStyle,
} from "@/components/Habit/HabitRecord/HabitRecord.style";

interface HabitRecordProps {
	habitData: HabitType;
}

function HabitRecord({ habitData }: HabitRecordProps) {
	const dispatch = useAppDispatch();

	const { userData } = useAppSelector((state) => state.user);
	const { modal } = useAppSelector((state) => state.modal);

	const params = useParams();

	const month = Number(params.month) < 10 ? `0${params.month}` : params.month;
	const date = Number(params.date) < 10 ? `0${params.date}` : params.date;

	const { habitRecordRequest, updateInputValue, handleSubmit } = useHabitRecordForm({
		initialData: {
			runHabitId: habitData.runHabitId,
			referenceDate: `${params.year}-${month}-${date}`,
			// runTime: `${habitData.runTime.noon} ${habitData.runTime.hour}시 ${habitData.runTime.minute}분에`,
			runTime: "18:24",
			runPlace: `${habitData.place}에서`,
			action: `${habitData.behavior}을(를)`,
			behaviorValue: undefined,
			achievement: -1,
			review: "",
			isRest: false,
		},
	});

	console.log(habitRecordRequest);

	// 임시로 랜덤요소를 통해 멘트에 변화를 주고 있음. 나중에 api 추가되면 수정할 예정
	const Random = Math.floor(Math.random() * 10) % prizeComments.length;
	const { blueText, yellowText, comment } = prizeComments[Random];

	const [selectedIcon, setSelectedIcon] = useState<number | null>(null);

	const handleIconClick = (id: number) => {
		id !== selectedIcon ? setSelectedIcon(id) : setSelectedIcon(null);
		updateInputValue("achievement", id);
	};

	useEffect(() => {
		dispatch(getUserInfo());
	}, []);

	return (
		<main css={layoutStyle}>
			<h1>{`${params.month}월 ${params.date}일\n${userData.nickname}님의 실천 기록`}</h1>
			<div css={identityBoxStyle}>
				<h3>정체성</h3>
				<span>{habitData.identity} 사람</span>
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
							placeholder={`${habitData.runTime.noon} ${habitData.runTime.hour}시 ${habitData.runTime.minute}분에`}
							// onChange={(e) => updateInputValue("runTime", e.target.value)}
						/>
					</li>
					<li>
						<input
							placeholder={`${habitData.place}에서`}
							onChange={(e) => updateInputValue("runPlace", e.target.value)}
						/>
					</li>
					<li>
						<input
							placeholder={`${habitData.behavior}을(를)`}
							onChange={(e) => updateInputValue("action", e.target.value)}
						/>
					</li>
					<li>
						<input
							value={habitRecordRequest.behaviorValue || ""}
							onChange={(e) => updateInputValue("behaviorValue", Number(e.target.value))}
						/>
						<span>{habitData.behaviorUnit}</span>
					</li>
				</ul>
				<h3>했다</h3>
			</div>

			<div css={iconStyle}>
				<h3>오늘의 습관 실천을 어떠셨나요?</h3>
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
			</div>

			<div css={inputBoxStyle}>
				<label htmlFor="review">
					<h3>별자취 남기기</h3>
				</label>
				<textarea
					placeholder="실천하며 느낀 점이나 다짐 등을 자유롭게 적어보세요!"
					maxLength={1000}
					id="review"
					value={habitRecordRequest.review}
					onChange={(e) => updateInputValue("review", e.target.value)}
				/>
				<span>{habitRecordRequest.review.length}/1,000자</span>
			</div>

			<FooterBtn handleBtnClick={handleSubmit} text="기록하여 별 얻기" isTransparent />

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
