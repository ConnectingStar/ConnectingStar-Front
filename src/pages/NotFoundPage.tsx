import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import NotFoundCharacter from "@/assets/image/img-not-found-character.png";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";

import { PATH } from "@/constants/path";

import { theme } from "@/styles/theme";

export default function NotFoundPage() {
	const navigate = useNavigate();

	return (
		<div css={containerStyle}>
			<img src={NotFoundCharacter} alt="도망가는 타스" />
			<h1>잘못된 접근입니다.</h1>
			<p>찾으시는 페이지가 존재하지 않아요😅</p>
			<FooterBtn text="홈으로" handleBtnClick={() => navigate(PATH.HOME)} />
		</div>
	);
}

const containerStyle = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100dvh;

	img {
		width: 9.375rem;
		margin-bottom: 1.25rem;
	}

	h1 {
		margin-bottom: 0.375rem;
		${theme.font.head_a}
		color: ${theme.color.font_black};
	}

	p {
		${theme.font.body_a}
		color: ${theme.color.font_gray};
	}
`;
