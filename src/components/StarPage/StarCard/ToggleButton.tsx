import { css } from "@emotion/react";

import Toggle from "@/components/common/Button/Toggle/Toggle";

import { theme } from "@/styles/theme";

interface ToggleButtonProps {
	isToggle: boolean;
	handleTogglePrev: () => void;
}

export default function ToggleButton({ isToggle, handleTogglePrev }: ToggleButtonProps) {
	return (
		<div css={containerStyle}>
			<p>보유 카드 모아보기</p>
			<Toggle isToggle={isToggle} handleTogglePrev={handleTogglePrev} />
		</div>
	);
}
const containerStyle = css`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 12px;
	margin: 1.25rem 0;
	${theme.font.body_b_bold}
`;
