import { layoutStyle, infoBoxStyle } from "@/components/ChartPage/TotalInfo/TotalInfo.style";

interface TotalInfoProps {
	totalStarCount: number;
	totalValue: number;
}

const TotalInfo = ({ totalStarCount, totalValue }: TotalInfoProps) => {
	return (
		<div css={layoutStyle}>
			<div css={infoBoxStyle}>
				<h2>총 누적 별</h2>
				<h3>{totalStarCount}</h3>
			</div>
			<div css={infoBoxStyle}>
				<h2>총 누적 페이지</h2>
				<h3>{totalValue}</h3>
			</div>
		</div>
	);
};

export default TotalInfo;
