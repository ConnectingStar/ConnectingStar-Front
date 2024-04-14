import { useRef, useState } from "react";

export const useSelectScroller = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectNoon, setSelectNoon] = useState("오전");

	const ref = useRef<HTMLUListElement>(null);

	const onScroll = () => {
		if (!ref.current) return;

		const top = ref.current.scrollTop;
		const currentItemIndex = top ? Math.floor(top / 52) : 0;

		if (top > 0) {
			setSelectNoon("오후");
		} else {
			setSelectNoon("오전");
		}

		setSelectedIndex(currentItemIndex);
	};

	return { onScroll, selectedIndex, selectNoon, ref };
};
