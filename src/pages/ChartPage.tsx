import Tab from "@/components/ChartPage/Tab/Tab";
import TotalInfo from "@/components/ChartPage/TotalInfo/TotalInfo";
import WeekChart from "@/components/ChartPage/WeekChart/WeekChart";
import ButtonCarousel from "@/components/common/ButtonCarousel/ButtonCarousel";
import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";

const ChartPage = () => {
	return (
		<>
			<Header>
				<Header.Title hasButton={false}>통계</Header.Title>
			</Header>
			<ButtonCarousel />
			<TotalInfo />
			<Tab />
			<WeekChart />
			<Gnb />
		</>
	);
};

export default ChartPage;
