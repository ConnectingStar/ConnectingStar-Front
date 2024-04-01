import { useState } from "react";

import CheckIcon from "@/assets/icon/ic-check-blue.svg?react";

import {
	container,
	wrap,
	locationListStyle,
	locationInputStyle,
} from "@/components/Chatting/LocationModal/LocationModalStyle";
import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";

import { locationModalData } from "@/constants/locationModalConstants";

function LocationModal() {
	const [location, setLocation] = useState("");
	const [isFocus, setIsFocus] = useState(false);

	return (
		<div css={container}>
			<Header>
				<Header.CloseButton onClick={() => console.log("click")} />
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
					onChange={(e) => setLocation(e.target.value)}
				/>
				{/* TODO: handleBtnClick로 데이터 전달 */}
				{isFocus ? (
					<FooterBtn
						text="확인"
						isSquare
						isTransparent
						disabled={!location}
						handleBtnClick={() => {
							setIsFocus(false);
						}}
					/>
				) : (
					<FooterBtn text="확인" disabled={!location} isTransparent />
				)}
			</div>
		</div>
	);
}

export default LocationModal;
