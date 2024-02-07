import Button from "@/components/CardDetail/Button";
import {
	sectionStyle,
	headerStyle,
	buttonContainerStyle,
} from "@/components/CardDetail/CardDetailPage.style";
import CategoryLabel from "@/components/CardDetail/CategoryLabel";
import Img from "@/components/CardDetail/Img";
import Story from "@/components/CardDetail/Story";
import Title from "@/components/CardDetail/Title";

// TODO: Header, Button 공통 컴포넌트 머지되면 교체 예정
export default function CardDetailPage() {
	return (
		<>
			<header css={headerStyle}></header>
			<section css={sectionStyle}>
				<Img />
				<Title as="h2">캐릭터에 대한 설명</Title>
				<Title as="h1">캐릭터 이름</Title>
				<CategoryLabel />
				<Story />
			</section>
			<div css={buttonContainerStyle}>
				<Button>별자리 보러 가기</Button>
			</div>
		</>
	);
}
