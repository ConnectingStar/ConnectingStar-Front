import Button from "@/components/StarCardDetail/Button";
import CategoryLabel from "@/components/StarCardDetail/CategoryLabel/CategoryLabel";
import Img from "@/components/StarCardDetail/Img/Img";
import Story from "@/components/StarCardDetail/Story";
import Title from "@/components/StarCardDetail/Title";
import { buttonState } from "@/constants/starCardDetailConstants";

import { sectionStyle, headerStyle, buttonContainerStyle } from "@/pages/StarCardDetailPage.style";

// TODO: API 연결 후 삭제 예정(상태에 따른 Img, Button UI 변경 확인 용)
interface dataType {
	state: "default" | "selected" | "have";
}

// TODO: API 연결 후 삭제 예정(상태에 따른 Img, Button UI 변경 확인 용)
const data: dataType = {
	state: "have",
};

// TODO: Header, Button 공통 컴포넌트 머지되면 교체 예정
export default function StarCardDetailPage() {
	return (
		<>
			<header css={headerStyle}></header>
			<section css={sectionStyle}>
				<Img state={data.state} />
				<Title as="h2">캐릭터에 대한 설명</Title>
				<Title as="h1">캐릭터 이름</Title>
				<CategoryLabel />
				<Story />
			</section>
			<div css={buttonContainerStyle}>
				<Button>{buttonState[data.state]}</Button>
			</div>
		</>
	);
}
