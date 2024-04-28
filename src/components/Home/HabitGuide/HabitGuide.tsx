import { useState, useEffect, useRef } from "react";

import ArrowIcon from "@/assets/icon/ic-arrow-left.svg?react";

import { habitGuideList } from "@/constants/habitGuideConstants";

import { layoutStyle, listStyle, itemStyle } from "@/components/Home/HabitGuide/HabitGuide.style";

function HabitGuide() {
	const [activatedIndex, setActivatedIndex] = useState<number | null>(null);
	const listRef = useRef<HTMLUListElement>(null);
	const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
	const handleButton = (idx: number) => {
		if (idx === activatedIndex) {
			setActivatedIndex(null);
			return;
		}

		setActivatedIndex(idx);
	};

	useEffect(() => {
		// 항목이 선택되면 선택된 항목으로 스크롤
		if (activatedIndex !== null && listRef.current) {
			const selectedItem = listRef.current.children[activatedIndex] as HTMLLIElement;
			if (selectedItem) {
				const scrollTop = selectedItem.offsetTop - 4.5 * rem;
				console.log(scrollTop);
				window.scrollTo({ top: scrollTop, behavior: "smooth" });
			}
		}
	}, [activatedIndex]);

	return (
		<div css={layoutStyle}>
			<ul ref={listRef} css={listStyle}>
				{habitGuideList.map(({ index, title, paragraph }, idx) => (
					<li key={idx} css={itemStyle(activatedIndex === idx)}>
						<div>
							<div>
								<h1>{index}</h1>
								<h2>{title}</h2>
							</div>

							<ArrowIcon onClick={() => handleButton(idx)} />
						</div>
						<div>
							<p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default HabitGuide;
