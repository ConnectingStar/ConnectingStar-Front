import { css } from "@emotion/react";

import Header from "@/components/common/Header/Header";

import { theme } from "@/styles/theme";

function VisitTracker() {
	const discoveryRouteText = ["앱 스토어", "지인 추천", "SNS 광고", "검색", "기타"];

	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<div css={visitTrackerStyle}>
				<h1>어떤 경로를 통해 오셨나요?</h1>
				<ul>
					{discoveryRouteText.map((item) => (
						<li key={item}>
							<button>{item}</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default VisitTracker;

export const visitTrackerStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.25rem 1.5rem;
	& > h1 {
		${theme.font.head_a}
		margin-bottom: 2.5rem;
	}
	button {
		width: 100%;
		height: 3.438rem;
		border: 2px solid ${theme.color.line};
		border-radius: 15px;
		margin-bottom: 0.375rem;
		display: flex;
		justify-content: center;
		align-items: center;
		${theme.font.button_big}
	}
`;
