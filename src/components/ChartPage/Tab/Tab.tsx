import { SetURLSearchParams } from "react-router-dom";

import { TAB_KEY, TAB_PARAM, TAB_TITLE } from "@/constants/tabConstants";

import { layoutStyle, tabButtonStyle } from "@/components/ChartPage/Tab/Tab.style";

const Tab = ({
	searchParams,
	setSearchParams,
}: {
	searchParams: URLSearchParams;
	setSearchParams: SetURLSearchParams;
}) => {
	return (
		<ul css={layoutStyle}>
			<li>
				<button
					css={tabButtonStyle(searchParams.get(TAB_KEY) === TAB_PARAM.WEEK)}
					onClick={() => setSearchParams(`${TAB_KEY}=${TAB_PARAM.WEEK}`)}
				>
					{TAB_TITLE.WEEK}
				</button>
			</li>
			<li>
				<button
					css={tabButtonStyle(searchParams.get(TAB_KEY) === TAB_PARAM.MONTH)}
					onClick={() => setSearchParams(`${TAB_KEY}=${TAB_PARAM.MONTH}`)}
				>
					{TAB_TITLE.MONTH}
				</button>
			</li>
		</ul>
	);
};

export default Tab;
