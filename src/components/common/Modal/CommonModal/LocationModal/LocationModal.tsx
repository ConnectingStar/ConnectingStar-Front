import { useState, useEffect, useRef } from "react";

import CheckIcon from "@/assets/icon/ic-check-blue.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import {
	container,
	contents,
	locationListStyle,
	locationInputStyle,
	scrollable,
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
		document.documentElement.style.overflow = "hidden"; // NOTE: iOS PWA 환경에서 필요
		document.body.style.overflow = "hidden";

		const updateModalPosition = () => {
			const visualViewport = window.visualViewport;

			if (!visualViewport || !modalRef.current || !modalContentsRef.current) return;

			const calculatedBottom =
				window.innerHeight - visualViewport.height - visualViewport.offsetTop;

			// NOTE: iOS 사파리에서 Bottom 값이 음수인 경우 대응
			const modalBottom =
				calculatedBottom < 0 ? window.innerHeight - visualViewport.height : calculatedBottom;

			modalRef.current.style.height = `${visualViewport.height}px`;
			modalRef.current.style.bottom = `${modalBottom}px`;

			const scrollHeight = modalContentsRef.current.scrollHeight;
			const scrollTop = scrollHeight - visualViewport.height;
			modalContentsRef.current?.scrollTo(0, scrollTop);
		};

		window.visualViewport?.addEventListener("resize", updateModalPosition);
		window.visualViewport?.addEventListener("scroll", updateModalPosition);

		return () => {
			document.documentElement.style.overflow = "auto";
			document.body.style.overflow = "auto";
			window.visualViewport?.removeEventListener("resize", updateModalPosition);
			window.visualViewport?.removeEventListener("scroll", updateModalPosition);
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
					onBlur={() => {
						setIsInputFocus(false);
						if (modalRef.current) {
							modalRef.current.style.bottom = `${0}px`;
							modalRef.current.style.height = "100dvh";
						}
					}}
					onChange={(e) => setPlace(e.target.value)}
				/>
			</div>
			<div css={scrollable}></div>

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
