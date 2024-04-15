import { useState, useEffect, useRef, SetStateAction, Dispatch } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import {
	layoutStyle,
	listCenterStyle,
	listItemStyle,
	listStyle,
} from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal.style";
import { TimeMapper } from "@/utils/TimeMapper";

interface ScrollPickerProps {
	list: string[];
	setList?: Dispatch<SetStateAction<string[]>>;
	onSelectedChange: (value: string | number) => void;
	total?: number;
}
interface ModalOptions {
	title?: string;
}

function SelectTimeModal({ title = "시간을 선택해 주세요" }: ModalOptions) {
	const [selectedClock, setSelectedClock] = useState({ noon: "오전", time: "01", minute: "00" });
	const isNoon = ["", "오전", "오후", ""];
	const timeList = Array.from({ length: 12 }).map((_, idx) => {
		if (idx + 1 < 10) {
			return "0" + (idx + 1);
		}
		return "" + (idx + 1);
	});

	const [time, setTime] = useState(timeList.concat(timeList));
	const minuteList = Array.from({ length: 60 }).map((_, idx) => {
		if (idx < 10) {
			return "0" + idx;
		}
		return "" + idx;
	});
	const [minute, setMinute] = useState(minuteList);
	const onSelectedChange = (type: string) => (target: string | number) => {
		setSelectedClock({ ...selectedClock, [type]: target });
	};

	useEffect(() => {
		console.log(selectedClock);
	}, [selectedClock]);

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<div>{title}</div>
				<div>
					<div>
						<Picker list={isNoon} onSelectedChange={onSelectedChange("noon")} />
					</div>
					<div>
						<Picker
							list={time}
							setList={setTime}
							onSelectedChange={onSelectedChange("time")}
							total={12}
						/>
						<p>:</p>
						<Picker
							list={minute}
							setList={setMinute}
							onSelectedChange={onSelectedChange("minute")}
							total={60}
						/>
					</div>
				</div>
				<span>
					<FooterBtn leftText="취소" text="선택" isPositionStatic />
				</span>
			</div>
		</Modal>
	);
}

export default SelectTimeModal;

const Picker = ({ list, setList, onSelectedChange, total }: ScrollPickerProps) => {
	const SCROLL_DEBOUNCE_TIME = 100;
	const ref = useRef<HTMLUListElement>(null);
	const [selected, setSelected] = useState(1);
	const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
	const timerRef = useRef(0);
	const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
	const ITEM_HEIGHT = rootFontSize * 3.625;
	const handleScroll = () => {
		if (ref.current) {
			// setList가 있을 시에는 무한 캐러셀의 스타일을, 아닐 때는 기본적인 캐러셀 기능을 구현
			clearTimeout(timerRef.current!);
			if (setList) {
				// 위로 스크롤
				if (ref.current.scrollTop < ITEM_HEIGHT * 3) {
					const upperArr = TimeMapper(list[0], total, 12, "upper");
					setList([...upperArr, ...list.slice(0, list.length - upperArr.length)]);
					ref.current.scrollTop = ITEM_HEIGHT * 15;
				}
				// 위로 스크롤시 아래로 스크롤
				if (ref.current.scrollTop >= ref.current.scrollHeight - ITEM_HEIGHT * 3) {
					const lowerArr = TimeMapper(list[list.length - 1], total, 12, "lower");
					setList([...list.slice(lowerArr.length), ...lowerArr]);
					ref.current.scrollTop = ref.current.scrollHeight - ITEM_HEIGHT * 15;
				}
				// 스크롤 업데이트하지 않을시 무한 스크롤이 아닐때의 로직
			} else {
				if (ref.current.scrollTop < ITEM_HEIGHT) {
					ref.current.scrollTop = ITEM_HEIGHT;
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
			ref.current.scrollTop = +selected * ITEM_HEIGHT;
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
