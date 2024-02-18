import Header from "@/components/common/Header";

import { discoveryRouteStyle } from "./DiscoveryRoutePage.style";

function DiscoveryRoutePage() {
	const discoveryRouteData = ["앱 스토어", "지인 추천", "SNS 광고", "검색", "기타"];

	return (
		<>
			<Header>
				<Header.PrevButton></Header.PrevButton>
			</Header>
			<div css={discoveryRouteStyle.container}>
				<h1>어떤 경로를 통해 오셨나요?</h1>
				<ul>
					{discoveryRouteData.map((item) => (
						<li>{item}</li>
					))}
				</ul>
			</div>
		</>
	);
}
export default DiscoveryRoutePage;
