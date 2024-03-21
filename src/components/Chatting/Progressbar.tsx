import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

interface ProgressProps {
	totalClicksNeeded: number;
	currentClicks: number;
}

function Progressbar({ totalClicksNeeded, currentClicks }: ProgressProps) {
	// 클릭 필요 수와 현재 클릭 수를 비교해서 %로 보여주는 함수
	const calculateProgress = () => {
		return (currentClicks / totalClicksNeeded) * 100;
	};

	return (
		<div css={progressbarStyle(calculateProgress())}>
			<div />
		</div>
	);
}

export default Progressbar;

const progressbarStyle = (calculateProgress: number) => css`
	width: 100%;
	height: 4px;
	background-color: ${theme.color.button_disabled};
	& > div {
		height: 4px;
		width: ${calculateProgress}%;
		background-color: ${theme.color.main_blue};
	}
`;
