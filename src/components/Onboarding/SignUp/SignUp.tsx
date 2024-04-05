import { useEffect, useState } from "react";

import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";

import { signUpData } from "@/constants/onboardingConstants";

import { theme } from "@/styles/theme";

function SignUp({ onNext }: { onNext: () => void }) {
	const [signUpPage, setsignUpPage] = useState(0);

	useEffect(() => {
		if (signUpPage === 3) onNext();
	}, [signUpPage]);

	return (
		<div css={container}>
			<img src={signUpData[signUpPage]?.img} alt="logo" />
			<pre
				dangerouslySetInnerHTML={{
					__html: signUpData[signUpPage]?.text,
				}}
			/>
			<FooterBtn text="다음" handleBtnClick={() => setsignUpPage((prev) => prev + 1)} />
		</div>
	);
}

export default SignUp;

const container = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.25rem 1.5rem 0;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > img {
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
