import { useState } from "react";

import CheckIcon from "@/assets/icon/ic-check-blue.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import {
	container,
	wrap,
	locationListStyle,
	locationInputStyle,
} from "@/components/common/Modal/CommonModal/LocationModal/LocationModalStyle";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { updateHabitUserData } from "@/api/user/userSlice";

import { locationModalData } from "@/constants/locationModalConstants";

import type { HabitRequestType } from "@/types/habit";

interface LocationModalType {
	progress?: number;
	addprogress?: () => void;
	updateInputValue?: <Key extends keyof HabitRequestType>(
		key: Key,
		value: HabitRequestType[Key],
	) => void;
}

function LocationModal({ progress, addprogress, updateInputValue }: LocationModalType) {
	const dispatch = useAppDispatch();

	const [place, setPlace] = useState("");
	const [isInputFocus, setIsInputFocus] = useState(false);

	const confirmSelectedTag = () => {
		progress === 5 && addprogress && addprogress();

		// 온보딩시
		addprogress && dispatch(updateHabitUserData({ place }));
		// 장소 수정시
		!addprogress && updateInputValue && updateInputValue("place", place);

		dispatch(closeModal());
	};

	return (
		<div css={container}>
			<Header>
				<Header.CloseButton onClick={() => dispatch(closeModal())} />
			</Header>

			<div css={wrap}>
				<h1>장소를 입력해 주세요</h1>
				<ul css={locationListStyle}>
					<p>예시</p>
					{locationModalData.map((example) => (
						<li key={example}>
							<CheckIcon />
							{example}
						</li>
					))}
				</ul>
				<input
					css={locationInputStyle}
					type="text"
					placeholder="직접입력"
					onFocus={() => setIsInputFocus(true)}
					onBlur={() => setIsInputFocus(false)}
					onChange={(e) => setPlace(e.target.value)}
				/>

				<FooterBtn
					text="확인"
					isSquare={isInputFocus}
					isTransparent
					disabled={!place}
					handleBtnClick={() => {
						isInputFocus ? setIsInputFocus(false) : confirmSelectedTag();
					}}
				/>
			</div>
		</div>
	);
}

export default LocationModal;
