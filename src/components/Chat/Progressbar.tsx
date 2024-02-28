import { progressbarStyle } from "@/components/Chat/Progressbar.style";

interface ProgressProps {
	totalClicksNeeded: number;
	currentClicks: number;
}

const Progressbar: React.FC<ProgressProps> = ({ totalClicksNeeded, currentClicks }) => {
	const calculateProgress = () => {
		return (currentClicks / totalClicksNeeded) * 100;
	};

	return (
		<div css={progressbarStyle(calculateProgress())}>
			<div></div>
		</div>
	);
};

export default Progressbar;
