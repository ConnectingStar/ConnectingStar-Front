import { useState, useEffect, useRef } from "react";

import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

// import { useAppDispatch } from "@/api/hooks";

import { theme } from "@/styles/theme";

interface ScrollPickerProps {
	list: (string | number)[];
	// onSelectedChange?: (selected: string | number) => void;
}

function SelectTimeModal() {
	const timeList = Array.from({ length: 60 }).map((_, idx) => idx);
	// const [timeList, setTimeList] = useState(Array.from({ length: 60 }).map((_, idx) => idx));

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<label>1차 알림 시간을 선택해 주세요.</label>
				<section>
					<Picker list={timeList} />
				</section>
				<FooterBtn leftText="취소" text="선택" isPositionStatic />
			</div>
		</Modal>
	);
}

export default SelectTimeModal;

const Picker = ({ list }: ScrollPickerProps) => {
	const SCROLL_DEBOUNCE_TIME = 150;
	const newList = ["", ...list, ""];
	const ref = useRef<HTMLUListElement>(null);
	const [selected, setSelected] = useState(1);
	const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
	const timerRef = useRef(0);
	const ITEM_HEIGHT = 50;

	const handleScroll = () => {
		if (ref.current) {
			clearTimeout(timerRef.current!);
			if (ref.current.scrollTop < ITEM_HEIGHT) {
				ref.current.scrollTop = ITEM_HEIGHT;
			}

			timerRef.current = setTimeout(() => {
				const index = Math.floor((ref.current!.scrollTop + ITEM_HEIGHT / 2) / ITEM_HEIGHT);
				if (list[index] !== "") {
					setSelected(index);
					itemRefs.current[index]?.scrollIntoView({
						behavior: "smooth",
						block: "center",
					});
					// onSelectedChange && onSelectedChange(newList[index]);
				}
			}, SCROLL_DEBOUNCE_TIME);
		}
	};

	useEffect(() => {
		if (ref.current) {
			ref.current.scrollTop = selected * ITEM_HEIGHT;
		}
	}, [selected]);

	return (
		<ul css={listStyle} ref={ref} onScroll={handleScroll}>
			<div css={listCenterStyle} />
			{newList.map((item, index) => (
				<li
					key={index}
					css={listItemStyle(index === selected)}
					ref={(el) => (itemRefs.current[index] = el)}
				>
					{item}
				</li>
			))}
		</ul>
	);
};

const layoutStyle = css`
	border-radius: 15px 15px 0 0;
	background-color: white;

	& > label {
		display: flex;
		align-items: center;
		${theme.font.header};
		height: 3.625rem;
		padding: 1.125rem 1.5rem 0.875rem;
	}

	& > section {
		display: flex;
	}
`;

const listStyle = css`
	list-style-type: none;
	overflow: hidden;
	width: 33.3%;
	height: 10.875rem;
	overflow-y: scroll;
	position: relative;
	// For Chrome, Safari and Opera
	::-webkit-scrollbar {
		display: none;
	}

	// For Firefox
	scrollbar-width: none;
`;

const listCenterStyle = css`
	height: 50px;
	position: sticky;
	top: 50px;
`;

const listItemStyle = (isSelected: boolean) => css`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: ${isSelected && "bold"};
	opacity: ${isSelected ? 1 : 0.4};
`;
