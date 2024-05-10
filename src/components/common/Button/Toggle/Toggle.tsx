import { toggleButtonStyle } from "@/components/common/Button/Toggle/Toggle.style";

interface ToggleProps {
	isToggle?: boolean;
	handleTogglePrev?: () => void;
	onClick?: () => void;
}

const Toggle = ({ isToggle, handleTogglePrev, onClick }: ToggleProps) => {
	const handleToggleClick = () => {
		handleTogglePrev && handleTogglePrev();
		onClick && !isToggle && onClick();
	};

	return (
		<div css={toggleButtonStyle(isToggle)} onClick={handleToggleClick}>
			<div />
		</div>
	);
};

export default Toggle;
