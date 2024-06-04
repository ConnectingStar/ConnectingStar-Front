import { Link } from "react-router-dom";

import { css } from "@emotion/react";

import { PATH } from "@/constants/path";

import { theme } from "@/styles/theme";

import { getOutlineTextStyle } from "@/components/StarPage/StarMain/Star.style";

const description = `빛나게 될 다음 별자리는 무엇일까요? \n 새로운 버디가 선택을 기다리고 있어요 😊`;

export default function SelectStarButton() {
	return (
		<div css={containerStyle}>
			<p data-text={description}>{description}</p>
			<Link to={PATH.STAR_CARD}>별자리 고르기</Link>
		</div>
	);
}

const containerStyle = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
	height: calc(100dvh - 11.875rem);
	position: relative;

	& > p {
		${getOutlineTextStyle(theme.color.main_deep_blue, "head_b")}
		white-space: pre-wrap;
		text-align: center;
	}

	& > a {
		padding: 1rem 1.875rem;
		border-radius: 15px;
		${theme.font.button_big};
		color: #fff;
		background-color: ${theme.color.main_blue};
	}
`;
