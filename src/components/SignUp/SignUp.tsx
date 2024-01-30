import { css } from "@emotion/react";

function SignUp() {
	const textSingUp = [
		"목표를 세우지 말고 Tars와함께 시스템을 만들어 가요 :)",
		"습관 가이드와 매일 알림으로 매일 실천 가능하도록!",
		"실천을 기록할 때마다 [별]을 받고 별자리를 채워 보세요!",
	];
	return (
		<div css={css``}>
			<div
				css={css`
					height: 17.6rem;
					margin-bottom: 3.94rem;
					background-color: #d9d9d9;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
				`}
			>
				<div
					css={css`
						width: 12.5rem;
						height: 12.5rem;
						background-color: white;
					`}
				></div>
				<div
					css={css`
						width: 100%;
						height: 4.375rem;
						background-color: yellow;
					`}
				>
					{textSingUp[0]}
				</div>
			</div>
			<div
				css={css`
					width: 100%;
					height: 5.44rem;
					background-color: white;
					position: fixed;
					bottom: 0;
					display: flex;
					flex-direction: column;
				`}
			>
				<button
					css={css`
						margin: 1rem 1.5rem;
						height: 3.4375rem;
						border-radius: 0.9375rem;
						color: white;
						background-color: #0176f9;
					`}
				>
					다음
				</button>
			</div>
		</div>
	);
}

export default SignUp;
