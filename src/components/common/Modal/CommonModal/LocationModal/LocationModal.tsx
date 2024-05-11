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

interface locationModalType {
	progress?: number;
	addprogress?: () => void;
}

function LocationModal({ progress, addprogress }: locationModalType) {
	const [place, setPlace] = useState("");
	const [isFocus, setIsFocus] = useState(false);
	const dispatch = useAppDispatch();
	const confirmSelectedTag = () => {
		if (addprogress === undefined) return;
		if (progress === 5) addprogress();

		dispatch(updateHabitUserData({ place }));
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
					{locationModalData.map((text) => (
						<li key={text}>
							<CheckIcon />
							{text}
						</li>
					))}
				</ul>
				<input
					css={locationInputStyle}
					type="text"
					placeholder="직접입력"
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
					onChange={(e) => setPlace(e.target.value)}
				/>
				{isFocus ? (
					<FooterBtn
						text="확인"
						isSquare
						isTransparent
						disabled={!place}
						handleBtnClick={() => {
							setIsFocus(false);
						}}
					/>
				) : (
					<FooterBtn
						text="확인"
						disabled={!place}
						isTransparent
						handleBtnClick={confirmSelectedTag}
					/>
				)}
			</div>
		</div>
	);
}

export default LocationModal;
