import { useState } from "react";

import { layoutStyle, tabButtonStyle } from "@/components/ChartPage/Tab/Tab.style";

const Tab = () => {
	const [tab, setTab] = useState("주간");

	return (
		<ul css={layoutStyle}>
			<li>
				<button css={tabButtonStyle(tab === "주간")} onClick={() => setTab("주간")}>
					주간
				</button>
			</li>
			<li>
				<button css={tabButtonStyle(tab === "월간")} onClick={() => setTab("월간")}>
					월간
				</button>
			</li>
		</ul>
	);
};

export default Tab;
