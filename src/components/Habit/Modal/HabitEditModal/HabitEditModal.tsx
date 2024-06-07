import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Modal from "@/components/common/Modal/Modal";

import { PATH } from "@/constants/path";

import { theme } from "@/styles/theme";

function HabitEditModal({ habitId }: { habitId: number }) {
	const navigate = useNavigate();

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>습관 수정</h1>
				<button onClick={() => navigate(PATH.HABIT_MANAGE(String(habitId)))}>수정하기</button>
			</div>
		</Modal>
	);
}

export default HabitEditModal;

const layoutStyle = css`
	padding: 1.125rem 1.5rem 1.25rem;
	border-radius: 15px 15px 0 0;
	color: ${theme.color.font_black};
	background-color: #fff;

	& > h1 {
		color: ${theme.color.font_black};
		${theme.font.header};
	}

	& > button {
		width: 100%;
		height: 3.625rem;
		margin-top: 0.75rem;
		text-align: left;
	}
`;
