import { css } from "@emotion/react";

import Header from "@/components/common/Header/Header";
import Button from "@/components/StarPage/StarCardDetail/Button";
import CategoryLabel from "@/components/StarPage/StarCardDetail/CategoryLabel";
import Img from "@/components/StarPage/StarCardDetail/Img/Img";
import Story from "@/components/StarPage/StarCardDetail/Story";
import Title from "@/components/StarPage/StarCardDetail/Title";

import { buttonState } from "@/constants/starCardDetailConstants";

// TODO: API 연결 후 삭제 예정(상태에 따른 Img, Button UI 변경 확인 용)
interface dataType {
	state: "default" | "selected" | "have";
}

// TODO: API 연결 후 삭제 예정(상태에 따른 Img, Button UI 변경 확인 용)
const data: dataType = {
	state: "have",
};

// TODO: Button 공통 컴포넌트 머지되면 교체 예정
export default function StarCardDetailPage() {
	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<section css={sectionStyle}>
				<Img state={data.state} />
				<Title tag="h2">캐릭터 설명 문구</Title>
				<Title tag="h1">캐릭터 이름</Title>
				<CategoryLabel />
				<Story />
				<div css={buttonContainerStyle}>
					<Button>{buttonState[data.state]}</Button>
				</div>
			</section>
		</>
	);
}

export const sectionStyle = css`
	width: 360px;
	padding: 1.25rem 1.5rem 1rem 1.5rem;
	margin: 0 auto;
`;

// TODO: 공통 버튼 컴포넌트 추가되면 교체 예정
export const buttonContainerStyle = css`
	margin-top: 1rem;
`;
