import ButtonCarousel from "@/components/MyPage/StarTrace/ButtonCarousel";
import Content from "@/components/MyPage/StarTrace/Content";
import SortButton from "@/components/MyPage/StarTrace/SortButton";

import { layoutStyle } from "@/components/MyPage/StarTrace/StarTrace.style";

const mockData = [
	{
		date: "2023.12.13 (수)",
		habitPractice: 5,
		title: "오후 8시에 우리 집 안 내 책상 위에서 책 읽기 8 페이지",
		content:
			"ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ\n.\n.\n.\n.\n.\n.\n오늘은 3페이지를 더 읽었다...더보기",
	},
	{
		date: "2023.12.13 (수)",
		habitPractice: 4,
		title: "오후 8시에 우리 집 안 내 책상 위에서 책 읽기 8 페이2",
		content:
			"ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ\n.\n.\n.\n.\n.\n.\n오늘은 3페이지를 더 읽었다...더보기",
	},
	{
		date: "2023.12.13 (수)",
		habitPractice: 3,
		title: "오후 8시에 우리 집 안 내 책상 위에서 책 읽기 8 페이3",
		content:
			"ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ\n.\n.\n.\n.\n.\n.\n오늘은 3페이지를 더 읽었다...더보기",
	},
];

const StarTrace = () => {
	return (
		<>
			<ButtonCarousel />
			<SortButton />
			<div css={layoutStyle}>
				{mockData.map((data) => (
					<Content
						key={data.title}
						date={data.date}
						title={data.title}
						habitPractice={data.habitPractice}
						content={data.content}
					/>
				))}
			</div>
		</>
	);
};

export default StarTrace;
