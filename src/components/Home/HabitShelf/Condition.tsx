import { habitIconData } from "@/constants/myPageConstants";

function Condition() {
	const randomIndex = Math.floor(Math.random() * 10);
	return (
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
	);
}

export default Condition;
