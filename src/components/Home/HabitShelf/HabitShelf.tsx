import FooterBtn from "@/components/common/FooterBtn/FooterBtn";

import { habitIconData } from "@/constants/myPageConstants";

import { layoutStyle } from "@/components/Home/HabitShelf/HabitShelf.style";

function HabitShelf() {
	const mode = ["휴식", "실천"];
	const randomIndex = Math.floor(Math.random() * 10);
	const today = new Date();

	return (
		<>
			<main css={layoutStyle}>
				<h1>{`${today.getMonth() + 1}월 ${today.getDate()}일\n영택님의 ${mode[randomIndex % 2]} 기록`}</h1>
				{mode[randomIndex % 2] === "실천" && (
					<>
						<label>
							<h2>{`정체성\n\n`}</h2>
							<span>{`매일 성장하는 사람`}</span>
						</label>
						<section className="condition">
							<h3>나는</h3>
							<ul>
								<li>오후 8시에</li>
								<li>우리 집 안 내 책상 위에서</li>
								<li>책 읽기를</li>
								<li>5 페이지</li>
							</ul>
							<h3>했다</h3>
						</section>
						<section className="icon">
							<h2>오늘의 습관 실천은</h2>
							{habitIconData[randomIndex % 5].icon}
						</section>
					</>
				)}
				<section className="record">
					<h2>별자취 남기기</h2>
					<div>오늘은 목표량을 잘 달성하여 뿌듯하다! 앞으로도 열심히 해야겠다.</div>
				</section>
			</main>
			<FooterBtn text="확인" />
		</>
	);
}

export default HabitShelf;
