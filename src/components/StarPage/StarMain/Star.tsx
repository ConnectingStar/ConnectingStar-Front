import { motion } from "framer-motion";

interface StarProps {
	cx: number; // 중심 x 좌표
	cy: number; // 중심 y 좌표
	r: number; // 원 반지름(별의 크기)
}

export default function Star({ cx, cy, r }: StarProps) {
	const duration = Math.random() * 2 + 1; // 1초에서 3초 사이
	const screenHeight = window.innerHeight;
	const opacity = 1 - cy / screenHeight; // 화면 아래로 갈수록 투명도가 증가

	const animation = {
		scale: [1, 0.5, 1], // 크기가 줄었다가 다시 커지는 효과
		transition: {
			duration: duration,
			repeat: Infinity,
		},
	};

	return (
		<motion.circle
			initial={{ cx, cy }} // cx, cy 초기값 고정
			cx={cx}
			cy={cy}
			r={r}
			fill="white"
			animate={animation}
			fillOpacity={opacity}
		/>
	);
}
