import { css } from "@emotion/react";

import { signUpText } from "@/constants/signUpText";

import { theme } from "@/styles/theme";

function SignUp({ onNext }: { onNext: () => void }) {
	return (
		<div css={SignUpStyle} onClick={onNext}>
			<img src="" alt="logo" />
			<pre>{signUpText[0]}</pre>
		</div>
	);
}

export default SignUp;

const SignUpStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.25rem 1.5rem 0;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > img {
		background-color: gray;
		width: 12.5rem;
		height: 12.5rem;
		object-fit: cover;
		margin-bottom: 5rem;
	}

	& > pre {
		${theme.font.head_a};
		text-align: center;
		width: 100%;
		height: 4.375rem;
	}
`;
