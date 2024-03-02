import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import CategoryLabel from "@/components/StarPage/StarCardDetail/CategoryLabel";
import Img from "@/components/StarPage/StarCardDetail/Img";
import Story from "@/components/StarPage/StarCardDetail/Story";

import { buttonState } from "@/constants/starPageConstants";

import { theme } from "@/styles/theme";

// TODO: API 연결 후 삭제 예정(상태에 따른 Img, Button UI 변경 확인 용)
interface dataType {
	state: "default" | "selected" | "have";
}

// TODO: API 연결 후 삭제 예정(상태에 따른 Img, Button UI 변경 확인 용)
const data: dataType = {
	state: "have",
};

export default function StarCardDetailPage() {
	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<section css={sectionStyle}>
				<Img state={data.state} />
				<h2 css={subTitleStyle}>캐릭터 설명 문구</h2>
				<h1 css={titleStyle}>캐릭터 이름</h1>
				<CategoryLabel />
				<Story />
			</section>
			<FooterBtn text={buttonState[data.state]} />
		</>
	);
}

const sectionStyle = css`
	width: 22.5rem;
	padding: 1.25rem 1.5rem 5.4375rem 1.5rem;
	margin: 0 auto;
`;

const titleStyle = css`
	margin-bottom: 0.5625rem;
	${theme.font.head_a}
	color: ${theme.color.font_black};
`;

const subTitleStyle = css`
	${theme.font.head_b}
	color: ${theme.color.main_blue};
`;
