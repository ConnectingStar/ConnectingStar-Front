import { useState } from "react";

import ArrowIcon from "@/assets/icon/ic-arrow-left.svg?react";

import { habitGuideList } from "@/constants/habitGuideConstants";

import { layoutStyle, listStyle, itemStyle } from "@/components/Home/HabitGuide/HabitGuide.style";

function HabitGuide() {
	const [activatedIndex, setActivatedIndex] = useState<number | null>(null);
	const handleButton = (idx: number) => {
		if (idx === activatedIndex) {
			setActivatedIndex(null);
			return;
		}

		setActivatedIndex(idx);
	};

	return (
		<div css={layoutStyle}>
			<ul css={listStyle}>
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
