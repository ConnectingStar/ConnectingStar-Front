import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import HabitHelpIcon from "@/assets/icon/ic-homepage-help-anouncement.svg?react";

import { theme } from "@/styles/theme";

function HabitHelp() {
	const navigate = useNavigate();

	return (
		<section
			css={layoutStyle}
			onClick={() => {
				navigate("/help");
			}}
		>
			<HabitHelpIcon />
			<span>습관 도움말</span>
		</section>
	);
}

export default HabitHelp;

export const layoutStyle = css`
	display: flex;
	align-items: center;
	gap: 12px;
	height: 3.25rem;
	border-radius: 15px;
	background-color: ${theme.color.line};
	padding: 1rem;

	& > span {
		${theme.font.body_b}
	}
`;
