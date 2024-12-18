import { useState, useEffect, useRef } from "react";

import CheckIcon from "@/assets/icon/ic-check-blue.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import {
	container,
	contents,
	locationListStyle,
	locationInputStyle,
	scroll,
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

	const modalRef = useRef<HTMLDivElement | null>(null);
	const modalContentsRef = useRef<HTMLDivElement | null>(null);

	const confirmSelectedTag = () => {
		progress === 5 && addprogress && addprogress();

		updateInputValue && updateInputValue("place", place);

		dispatch(closeModal());
	};

	useEffect(() => {
		document.body.style.overflow = "hidden";

		const updateBottom = () => {
			const viewport = window.visualViewport;

			if (viewport === null) return;

			const viewportBottom = window.innerHeight - viewport.height;

			if (modalRef.current) {
				modalRef.current.style.bottom = `${viewportBottom}px`;
			}
		};

		const updateHeight = () => {
			const viewport = window.visualViewport;

			if (viewport === null) return;

			const viewportHeight = viewport.height;

			if (modalRef.current) {
				modalRef.current.style.height = `${viewportHeight}px`;
				modalContentsRef.current?.scrollTo(0, viewportHeight);
			}
		};

		const handleUpdateViewport = () => {
			updateHeight();
			updateBottom();
		};

		window.visualViewport?.addEventListener("resize", handleUpdateViewport);
		window.visualViewport?.addEventListener("scroll", handleUpdateViewport);

		return () => {
			document.body.style.overflow = "auto";
			window.visualViewport?.removeEventListener("resize", updateBottom);
			window.visualViewport?.removeEventListener("scroll", updateBottom);
		};
	}, []);

	return (
		<div css={container} ref={modalRef}>
			<Header>
				<Header.CloseButton onClick={() => dispatch(closeModal())} />
			</Header>

			<div css={contents} ref={modalContentsRef}>
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
					type="search"
					placeholder="직접입력"
					maxLength={10}
					value={place}
					onFocus={() => setIsInputFocus(true)}
					onBlur={() => setIsInputFocus(false)}
					onChange={(e) => setPlace(e.target.value)}
				/>
			</div>
			<div css={scroll}></div>

			<FooterBtn
				text="확인"
				isSquare={isInputFocus}
				disabled={!place}
				handleBtnClick={() => {
					isInputFocus ? setIsInputFocus(false) : confirmSelectedTag();
				}}
			/>
		</div>
	);
}

export default LocationModal;
