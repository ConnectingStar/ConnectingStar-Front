import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

interface ProgressProps {
	totalClicksNeeded: number;
	currentClicks: number;
}

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

function Progressbar({ totalClicksNeeded, currentClicks }: ProgressProps) {
	const calculateProgress = () => {
		return (currentClicks / totalClicksNeeded) * 100;
	};

	return (
		<div css={progressbarStyle(calculateProgress())}>
			<div></div>
		</div>
	);
}

export default Progressbar;
