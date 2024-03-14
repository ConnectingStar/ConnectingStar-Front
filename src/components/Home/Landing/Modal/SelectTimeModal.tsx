import { useState, useEffect, useRef } from "react";

import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { theme } from "@/styles/theme";

interface ScrollPickerProps {
	list: (string | number)[];
	onSelectedChange: (value: string | number) => void;
}

function SelectTimeModal() {
	const [selectedClock, setSelectedClock] = useState({ noon: "오전", time: "01", minute: "00" });
	const isNoon = ["오전", "오후"];
	const timeList = Array.from({ length: 12 }).map((_, idx) => {
		if (idx + 1 < 10) {
			return "0" + (idx + 1);
		}
		return idx + 1 + "";
	});
	const minuteList = Array.from({ length: 60 }).map((_, idx) => {
		if (idx < 10) {
			return "0" + idx;
		}
		return idx + "";
	});
	const onSelectedChange = (type: string) => (target: string | number) => {
		setSelectedClock({ ...selectedClock, [type]: target });
	};

	useEffect(() => {
		console.log(selectedClock);
	}, [selectedClock]);

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<label>1차 알림 시간을 선택해 주세요.</label>
				<section>
					<div>
						<Picker list={isNoon} onSelectedChange={onSelectedChange("noon")} />
					</div>
					<div className="clock">
						<Picker list={timeList} onSelectedChange={onSelectedChange("time")} />
						<p>:</p>
						<Picker list={minuteList} onSelectedChange={onSelectedChange("minute")} />
					</div>
				</section>
				<span className="buttonWrapper">
					<FooterBtn leftText="취소" text="선택" isPositionStatic />
				</span>
			</div>
		</Modal>
	);
}

export default SelectTimeModal;

const Picker = ({ list, onSelectedChange }: ScrollPickerProps) => {
	const SCROLL_DEBOUNCE_TIME = 200;
	const newList = ["", ...list, ""];
	const ref = useRef<HTMLUListElement>(null);
	const [selected, setSelected] = useState(1);
	const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
	const timerRef = useRef(0);
	const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
	const ITEM_HEIGHT = rootFontSize * 3.625;

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
					onSelectedChange && onSelectedChange(newList[index]);
				}
			}, SCROLL_DEBOUNCE_TIME);
		}
	};

	useEffect(() => {
		if (ref.current) {
			ref.current.scrollTop = selected * ITEM_HEIGHT;
		}
	}, []);

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
		background-color: ${theme.color.bg};
		color: ${theme.color.font_black};
		padding: 0 3.625rem 0 3.625rem;
		${theme.font.time};
		& > div {
			display: flex;
			width: 50%;
		}
		& > .clock {
			position: relative;
			justify-content: space-between;

			& > p {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}

	& > .buttonWrapper {
		display: flex;
		padding: 1rem 1.5rem;
	}
`;

const listStyle = css`
	list-style-type: none;
	height: 10.875rem;
	overflow-y: scroll;
	position: relative;
	::-webkit-scrollbar {
		display: none;
	}
	scrollbar-width: none;
`;

const listCenterStyle = css`
	height: 3.625rem;
	position: sticky;
	background-color: transparent;
	top: 50%;
	transform: translateY(-50%);
`;
const listItemStyle = (isSelected: boolean) => css`
	height: 3.625rem;
	opacity: ${!isSelected && 0.5};
	display: flex;
	align-items: center;
`;
