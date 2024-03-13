import { css } from "@emotion/react";

interface StarProps {
	cx: number; // 중심 x 좌표
	cy: number; // 중심 y 좌표
	r: number; // 원의 반지름
}

export default function StarBackground() {
	const stars = [];
	const numberOfStars = 500; // 생성할 별의 수

	for (let i = 0; i < numberOfStars; i++) {
		const cx = Math.random() * window.innerWidth;
		const cy = Math.random() * window.innerHeight;
		const r = Math.random() * 1; // 별의 반지름을 랜덤하게 설정 (별의 크기)
		stars.push(<Star key={`star-${i}`} cx={cx} cy={cy} r={r} />);
	}

	// TODO: 100dvh 상수로 만들기...
	return (
		<svg width="500px" height="100dvh" css={starStyle}>
			{stars}
		</svg>
	);
}

function Star({ cx, cy, r }: StarProps) {
	const duration = Math.random() * 2 + 1; // 1초에서 3초 사이의 지속 시간
	const screenHeight = window.innerHeight; // 화면 높이
	const opacity = 1 - cy / screenHeight; // 화면 아래로 갈수록 투명도가 증가

	return (
		<circle cx={cx} cy={cy} r={r} fill="white" fill-opacity={opacity}>
			<animate
				attributeName="r"
				from={r}
				to={r * 0.5} // 최소 크기를 별의 반지름의 절반으로 설정
				dur={`${duration}s`} // 지속 시간 설정
				repeatCount="indefinite" // 무한 반복
				begin={`${Math.random() * duration}s`} // 애니메이션 시작 지연
				keyTimes="0; 0.5; 1" // 애니메이션의 중간 지점에서 가장 작게 설정
				values={`${r}; ${r * 0.5}; ${r}`} // 크기가 줄었다가 다시 커지는 효과
			/>
		</circle>
	);
}

const starStyle = css`
	position: absolute;
`;
