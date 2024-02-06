import { SignUpStyle } from "@/pages/SignUp/SignUp.style";

function SignUp() {
	const textSingUp = [
		"목표를 세우지 말고 Tars와\n함께 시스템을 만들어 가요 :)",
		"습관 가이드와 매일 알림으로\n 매일 실천 가능하도록!",
		"실천을 기록할 때마다 [별]을\n 받고 별자리를 채워 보세요!",
	];

	return (
		<div css={SignUpStyle}>
			<img src="" alt="" />
			<pre>{textSingUp[0]}</pre>
		</div>
	);
}

export default SignUp;
