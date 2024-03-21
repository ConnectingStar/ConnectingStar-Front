import { useState, useEffect, useRef, SetStateAction, Dispatch } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import {
	layoutStyle,
	listCenterStyle,
	listItemStyle,
	listStyle,
} from "@/components/Home/Landing/Modal/SelectTimeModal/SelectTimeModal.style";

interface ScrollPickerProps {
	list: (string | number)[];
	setList?: Dispatch<SetStateAction<(string | number)[]>>; // 변경
	onSelectedChange: (value: string | number) => void;
}

function SelectTimeModal() {
	const [selectedClock, setSelectedClock] = useState({ noon: "오전", time: "01", minute: "00" });
	const isNoon = ["", "오전", "오후", ""];
	const timeList = Array.from({ length: 12 }).map((_, idx) => {
		if (idx + 1 < 10) {
			return "0" + (idx + 1);
		}
		return idx + 1 + "";
	});
	const [time, setTime] = useState<string[]>(timeList);
	const minuteList = Array.from({ length: 60 }).map((_, idx) => {
		if (idx < 10) {
			return "0" + idx;
		}
		return idx + "";
	});
	const [minute, setMinute] = useState<string[]>(minuteList);
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
						<Picker list={time} setList={setTime} onSelectedChange={onSelectedChange("time")} />
						<p>:</p>
						<Picker
							list={minute}
							setList={setMinute}
							onSelectedChange={onSelectedChange("minute")}
						/>
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

const Picker = ({ list, setList, onSelectedChange }: ScrollPickerProps) => {
	const SCROLL_DEBOUNCE_TIME = 100;
	const ref = useRef<HTMLUListElement>(null);
	const [selected, setSelected] = useState(1);
	const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
	const timerRef = useRef(0);
	const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
	const ITEM_HEIGHT = rootFontSize * 3.625;
	const totalLength = list.length;

	const handleScroll = () => {
		if (ref.current) {
			clearTimeout(timerRef.current!);
			// setList가 있을 시에는 무한 캐러셀의 스타일을, 아닐 때는 기본적인 캐러셀 기능을 구현
			if (setList) {
				if (ref.current.scrollTop < ITEM_HEIGHT * 3) {
					const arr = Array.from({ length: 6 })
						.map((_, idx) => {
							// 시, 분에 따라 업데이트되는 요소들 변경
							const limit = totalLength < 24 ? 1 : 0;
							if (+list[0] - (idx + 1) < limit) {
								return `${totalLength + (+list[0] - (idx + 1)) < 10 ? "0" : ""}${totalLength + (+list[0] - (idx + 1))}`;
							} else {
								return `${+list[0] - (idx + 1) < 10 ? "0" : ""}${+list[0] - (idx + 1)}`;
							}
						})
						.reverse();
					setList([...arr, ...list.slice(0, list.length - arr.length)]);
					ref.current.scrollTop = ITEM_HEIGHT * arr.length;
				}

				if (ref.current.scrollTop >= ref.current.scrollHeight - ITEM_HEIGHT * 3) {
					const arr = Array.from({ length: 6 }).map((_, idx) => {
						// 시, 분에 따라 업데이트되는 요소들 변경
						const limit = totalLength < 24 ? totalLength - 1 : totalLength - 2;
						if (+list[list.length - 2] + (idx + 1) > limit) {
							return `${+list[list.length - 1] + (idx + 1) - totalLength < 10 ? "0" : ""}${+list[list.length - 1] + (idx + 1) - totalLength}`;
						} else {
							return `${+list[list.length - 1] + (idx + 1) < 10 ? "0" : ""}${+list[list.length - 1] + (idx + 1)}`;
						}
					});
					setList([...list.slice(arr.length), ...arr]);
					ref.current.scrollTop = ITEM_HEIGHT * (list.length - arr.length);
				}
			} else {
				if (ref.current.scrollTop < ITEM_HEIGHT) {
					ref.current.scrollTop = ITEM_HEIGHT;
				}
				if (ref.current.scrollTop > ref.current.scrollHeight - ITEM_HEIGHT) {
					ref.current.scrollTop = ref.current.scrollHeight - ITEM_HEIGHT;
				}
			}

			timerRef.current = setTimeout(() => {
				const index = Math.floor((ref.current!.scrollTop + ITEM_HEIGHT / 2) / ITEM_HEIGHT);
				if (list[index] !== "") {
					setSelected(index);
					itemRefs.current[index]?.scrollIntoView({
						behavior: "smooth",
						block: "center",
					});
					onSelectedChange && onSelectedChange(list[index]);
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
			{list.map((item, index) => (
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
