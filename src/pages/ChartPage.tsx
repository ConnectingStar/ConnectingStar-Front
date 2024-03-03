import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import MonthChart from "@/components/ChartPage/MonthChart/MonthChart";
import Tab from "@/components/ChartPage/Tab/Tab";
import TotalInfo from "@/components/ChartPage/TotalInfo/TotalInfo";
import WeekChart from "@/components/ChartPage/WeekChart/WeekChart";
import ButtonCarousel from "@/components/common/ButtonCarousel/ButtonCarousel";
import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";

import { TAB_KEY, TAB_PARAM } from "@/constants/tabConstants";

const ChartPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		if (
			searchParams.size === 0 ||
			(searchParams.get(TAB_KEY) !== TAB_PARAM.WEEK &&
				searchParams.get(TAB_KEY) !== TAB_PARAM.MONTH)
		) {
			setSearchParams(`${TAB_KEY}=${TAB_PARAM.WEEK}`);
		}
	}, [searchParams]);

	return (
		<>
			<Header>
				<Header.Title hasButton={false}>통계</Header.Title>
			</Header>
			<ButtonCarousel />
			<TotalInfo />
			<Tab searchParams={searchParams} setSearchParams={setSearchParams} />
			{searchParams.get(TAB_KEY) === TAB_PARAM.WEEK ? <WeekChart /> : <MonthChart />}

			<Gnb />
		</>
	);
};

export default ChartPage;
