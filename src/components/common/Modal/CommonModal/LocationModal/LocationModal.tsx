import { useState, useEffect, useRef } from "react";

import CheckIcon from "@/assets/icon/ic-check-blue.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import {
	container,
	wrapper,
	contents,
	locationListStyle,
	locationInputStyle,
} from "@/components/common/Modal/CommonModal/LocationModal/LocationModalStyle";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { locationModalData } from "@/constants/locationModalConstants";

import type { HabitRequestV2Type } from "@/types/habit";

interface LocationModalType {
	progress?: number;
	addprogress?: () => void;
	prevValue: string;
	updateInputValue?: <Key extends keyof HabitRequestV2Type>(
		key: Key,
		value: HabitRequestV2Type[Key],
	) => void;
}

function LocationModal({ progress, addprogress, prevValue, updateInputValue }: LocationModalType) {
	const dispatch = useAppDispatch();

	const [place, setPlace] = useState(prevValue ?? "");
	const [isInputFocus, setIsInputFocus] = useState(false);

	const [visualViewport, setVisualViewport] = useState(0);
	const [visualViewportOffsetTop, setVisualViewportOffsetTop] = useState(0);

	const modalRef = useRef<HTMLDivElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const confirmSelectedTag = () => {
		progress === 5 && addprogress && addprogress();

		updateInputValue && updateInputValue("place", place);

		dispatch(closeModal());
	};

	useEffect(() => {
		document.body.style.overflow = "hidden";

		const logVisualViewport = () => {
			const visualViewport = window.visualViewport;

			if (visualViewport === null) return;

			const visualViewportHeight = visualViewport.height;
			const visualViewportOffsetTop = visualViewport.offsetTop;

			if (window.innerHeight > visualViewportHeight) {
				setVisualViewportOffsetTop(visualViewportOffsetTop);
				setVisualViewport(visualViewportHeight);
				modalRef.current?.scrollTo(0, 1500);
			} else {
				setVisualViewportOffsetTop(0);
				setVisualViewport(0);
			}
		};
		window.visualViewport?.addEventListener("resize", logVisualViewport);
		window.visualViewport?.addEventListener("scroll", logVisualViewport);

		return () => {
			document.body.style.overflow = "auto";
			window.visualViewport?.removeEventListener("resize", logVisualViewport);
			window.visualViewport?.removeEventListener("scroll", logVisualViewport);
		};
	}, [visualViewport, visualViewportOffsetTop]);

	return (
		<div css={container}>
			<div css={wrapper(visualViewport)} ref={modalRef}>
				<Header>
					<Header.CloseButton onClick={() => dispatch(closeModal())} />
				</Header>

				<div css={contents}>
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
						ref={inputRef}
						css={locationInputStyle}
						type="search"
						placeholder="직접입력"
						maxLength={10}
						value={place}
						onFocus={() => setIsInputFocus(true)}
						onBlur={() => setIsInputFocus(false)}
						onChange={(e) => setPlace(e.target.value)}
					/>
				</div>

				<FooterBtn
					text="확인"
					isSquare={isInputFocus}
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
