import { useState, ChangeEvent, useEffect } from "react";

import ExclamationMarkIcon from "@/assets/icon/ic-exclamation-mark.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import StarPrizeModal from "@/components/Home/Landing/Modal/StarPrizeModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { habitConditions } from "@/constants/habitRecordConstants";
import { modalType } from "@/constants/modalConstants";
import { habitIconData } from "@/constants/myPageConstants";

import {
	layoutStyle,
	conditionStyle,
	iconsStyle,
	inputBoxStyle,
} from "@/components/Home/HabitRecord/HabitRecord.style";

interface HabitRecordsState {
	when: string;
	where: string;
	what: string;
	unit: number;
	[condition: string]: string | number;
}

function HabitRecord() {
	const today = new Date();
	const dispatch = useAppDispatch();
	const { modal } = useAppSelector((state) => state.modal);

	const [habitRecords, setHabitRecords] = useState<HabitRecordsState>({
		when: "",
		where: "",
		what: "",
		unit: 0,
	});
	const [traceText, setTraceText] = useState<string>("");
	const [isActivated, setIsActivated] = useState<boolean>(false);
	const [selectedIcon, setSelectedIcon] = useState<number | null>(null);

	const handleConditionInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		const numericValue = value.replace(/^0+|[^0-9]/g, "");

		setHabitRecords({
			...habitRecords,
			[name]: name === "unit" ? numericValue : value,
		});
	};

	const handleIconClick = (id: number) => {
		if (id !== selectedIcon) {
			setSelectedIcon(id);
		} else {
			setSelectedIcon(null);
		}
	};

	useEffect(() => {
		const { when, where, what, unit } = habitRecords;
		if (when.length > 0 && where.length > 0 && what.length > 0 && unit > 0) {
			setIsActivated(true);
		} else {
			setIsActivated(false);
		}
	}, [habitRecords]);

	return (
		<main css={layoutStyle}>
			<h1>{`${today.getMonth() + 1}월 ${today.getDate()}일\n영택님의 실천 기록`}</h1>
			<label>
				<h2>정체성</h2>
				<span>매일 성장하는 사람</span>
			</label>
			<section css={conditionStyle}>
				<div>
					<h3>나는</h3> <ExclamationMarkIcon />
				</div>
				{habitConditions.map(({ condition, placeholder }) => (
					<textarea
						key={condition}
						placeholder={placeholder}
						name={condition}
						onChange={handleConditionInput}
						value={habitRecords[condition]}
					/>
				))}

				<div className="unit">
					<textarea
						maxLength={4}
						onChange={handleConditionInput}
						name="unit"
						value={habitRecords.unit}
					/>
					<span>
						페이지 <p>*</p>
					</span>
				</div>
				<h3>했다.</h3>
			</section>
			<section css={iconsStyle(isActivated, selectedIcon)}>
				<h2>
					오늘의 습관 실천을 어떠셨나요? <p>*</p>
				</h2>
				<div>
					{habitIconData.map((habitIcon) => (
						<span
							key={habitIcon.id}
							onClick={() => handleIconClick(habitIcon.id)}
							className={`${habitIcon.id === selectedIcon && "selected"}`}
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
				isPositionStatic
				isTransparent
				disabled={!isActivated || !selectedIcon}
			/>
			{modal === modalType.STAR_PRIZE && <StarPrizeModal />}
		</main>
	);
}

export default HabitRecord;
