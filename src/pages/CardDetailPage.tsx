import Button from "@/components/CardDetail/Button";
import {
	sectionStyle,
	headerStyle,
	buttonContainerStyle,
} from "@/components/CardDetail/CardDetailPage.style";
import CategoryLabel from "@/components/CardDetail/CategoryLabel/CategoryLabel";
import Img from "@/components/CardDetail/Img/Img";
import Story from "@/components/CardDetail/Story";
import Title from "@/components/CardDetail/Title";
import { buttonState } from "@/constants/cardDetailConstants";

// TODO: API 연결 후 삭제 예정(상태에 따른 Img, Button UI 변경 확인 용)
interface dataType {
	state: "default" | "selected" | "possession";
}

// TODO: API 연결 후 삭제 예정(상태에 따른 Img, Button UI 변경 확인 용)
const data: dataType = {
	state: "default",
};

// TODO: Header, Button 공통 컴포넌트 머지되면 교체 예정
export default function CardDetailPage() {
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
// 별자리 선택 상태에 따라서 버튼, 이미지 상태도 함께 바뀌어야 함!
