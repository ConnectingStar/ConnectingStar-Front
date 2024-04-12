import { useState, useRef } from "react";

import { PICKER_HEIGHT, SCROLL_DEBOUNCE_TIME } from "@/constants/time";

import {
	listCenterStyle,
	listItemStyle,
	listStyle,
} from "@/components/common/Modal/CommonModal/SelectTimeModal/TimePicker/TimePicker.style";

interface ScrollPickerProps {
	list: string[];
	onSelectedChange: (value: string | number) => void;
}

const TimePicker = ({ list, onSelectedChange }: ScrollPickerProps) => {
	const [selected, setSelected] = useState(0);

	const itemRef = useRef<(HTMLLIElement | null)[]>([]);
	const timerRef = useRef(0);
	const scrollRef = useRef<HTMLUListElement>(null);

	const newList = [...list, ""];

	const handleScroll = () => {
		if (!scrollRef.current) return;

		clearTimeout(timerRef.current);

		timerRef.current = setTimeout(() => {
			const index = Math.floor((scrollRef.current!.scrollTop + PICKER_HEIGHT / 2) / PICKER_HEIGHT);

			if (list[index] !== "") {
				setSelected(index);

				itemRef.current[index]?.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});

				onSelectedChange(list[index]);
			}
		}, SCROLL_DEBOUNCE_TIME);
	};

	return (
		<ul css={listStyle} ref={scrollRef} onScroll={handleScroll}>
			<div css={listCenterStyle} />
			{newList.map((item, index) => (
				<li
					key={item}
					css={listItemStyle(index === selected)}
					ref={(element) => (itemRef.current[index] = element)}
				>
					{item}
				</li>
			))}
		</ul>
	);
};

export default TimePicker;
