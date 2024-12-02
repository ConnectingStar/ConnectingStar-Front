import { toggleButtonStyle } from "@/components/common/Button/Toggle/Toggle.style";

interface ToggleProps {
	isToggle?: boolean;
	handleTogglePrev?: () => void;
	onClick?: () => void;
	isPause?: boolean;
}

const Toggle = ({ isToggle, handleTogglePrev, onClick, isPause }: ToggleProps) => {
	const handleToggleClick = () => {
		handleTogglePrev && handleTogglePrev();
		onClick && (isPause ? onClick() : isToggle && onClick());
	};

	return (
		<div css={toggleButtonStyle(isToggle)} onClick={handleToggleClick}>
			<div />
		</div>
	);
};

export default Toggle;
