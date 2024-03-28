import { habitIconData } from "@/constants/myPageConstants";

import { layoutStyle } from "@/components/Home/HabitShelf/HabitShelf.style";

function HabitShelf() {
	const mode = ["휴식", "실천"];
	const randomIndex = Math.floor(Math.random() * 10);
	const today = new Date();
	return (
		<main css={layoutStyle}>
			<h1>{`${today.getMonth() + 1}월 ${today.getDate()}일\n영택님의 ${mode[randomIndex % 2]} 기록`}</h1>
			{mode[randomIndex % 2] === "실천" && (
				<>
					<div>
						<h2>정체성</h2>
						<p>매일 성장하는 사람</p>
					</div>
					<div>
						<h2>나는</h2>
						<div>
							<p>오후 8시에</p>
							<p>우리 집 안 내 책상 위에서</p>
							<p>책 읽기를</p>
							<p>5페이지</p>
						</div>
						<h2>했다</h2>
					</div>
					<div>
						<h2>오늘의 습관 실천은</h2>
						{habitIconData[randomIndex % 5].icon}
					</div>
				</>
			)}
			<div>
				<h2>별자취 남기기</h2>
				<p>오늘은 목표량을 잘 달성하여 뿌듯하다! 앞으로도 열심히 해야겠다.</p>
			</div>
		</main>
	);
}

export default HabitShelf;
