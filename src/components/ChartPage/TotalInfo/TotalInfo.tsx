import { layoutStyle, infoBoxStyle } from "@/components/ChartPage/TotalInfo/TotalInfo.style";

const TotalInfo = () => {
	return (
		<div css={layoutStyle}>
			<div css={infoBoxStyle}>
				<h2>총 누적 별</h2>
				<h3>53</h3>
			</div>
			<div css={infoBoxStyle}>
				<h2>총 누적 페이지</h2>
				<h3>280</h3>
			</div>
		</div>
	);
};

export default TotalInfo;
