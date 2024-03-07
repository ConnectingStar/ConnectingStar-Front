import Header from "@/components/common/Header/Header";

import { visitTrackStyle } from "@/pages/VisitTrackPage.style";

function VisitTrackPage() {
	const discoveryRouteText = ["앱 스토어", "지인 추천", "SNS 광고", "검색", "기타"];

	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<div css={visitTrackStyle}>
				<h1>어떤 경로를 통해 오셨나요?</h1>
				<ul>
					{discoveryRouteText.map((item) => (
						<li>{item}</li>
					))}
				</ul>
			</div>
		</>
	);
}
export default VisitTrackPage;
