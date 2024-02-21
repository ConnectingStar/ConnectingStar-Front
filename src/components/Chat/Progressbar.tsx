import { progressbarStyle } from "@/components/Chat/Progressbar.style";

interface ProgressProps {
	percentage: number;
}

const Progressbar: React.FC<ProgressProps> = ({ percentage }) => {
	return (
		<div css={progressbarStyle(percentage)}>
			<div></div>
		</div>
	);
};

export default Progressbar;
