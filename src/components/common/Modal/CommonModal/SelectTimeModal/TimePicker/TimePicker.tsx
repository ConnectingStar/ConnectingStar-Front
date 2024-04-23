import { useEffect } from "react";

import { useSelectScroller } from "@/hooks/useSelectScroller";

import {
	listItemStyle,
	listStyle,
} from "@/components/common/Modal/CommonModal/SelectTimeModal/TimePicker/TimePicker.style";

interface ScrollPickerProps {
	valueKey: string;
	list: string[];
	handleChangeTime: (target: string, value: number | string) => void;
}

const TimePicker = ({ valueKey, list, handleChangeTime }: ScrollPickerProps) => {
	const { onScroll, selectedIndex, selectNoon, ref } = useSelectScroller();

	useEffect(() => {
		const NewSelectedIndex = selectedIndex < 10 ? `0${selectedIndex}` : `${selectedIndex}`;

		if (valueKey === "noon") {
			handleChangeTime(valueKey, selectNoon);
		} else {
			handleChangeTime(valueKey, NewSelectedIndex);
		}
	}, [selectedIndex, selectNoon]);

	return (
		<ul css={listStyle} ref={ref} onScroll={onScroll}>
			{list.map((item, index) => (
				<li
					key={item}
					css={listItemStyle(valueKey !== "noon" ? selectedIndex === index : selectNoon === item)}
				>
					{item}
				</li>
			))}
		</ul>
	);
};

export default TimePicker;
