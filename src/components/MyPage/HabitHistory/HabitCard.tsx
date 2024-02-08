import { layoutStyle } from "@/components/MyPage/HabitHistory/HabitCard.style";

const HabitCard = () => {
	return (
		<div css={layoutStyle}>
			<h1>오후 8시에 우리 집 안 내 책상 위에서 책 읽기 5 페이지</h1>
			<p>
				<span>시작일 : 2023. 12.11</span>
				<span>실천 : 53</span>
				<span>휴식 : 13</span>
			</p>
		</div>
	);
};

export default HabitCard;
