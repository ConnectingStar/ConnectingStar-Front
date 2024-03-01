import { useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";

import { signUpData } from "@/constants/onboardingConstants.";

import { SignUpStyle } from "@/components/Onboarding/SignUp.style";

function SignUp({ onNext }: { onNext: () => void }) {
	const [signUpNum, setSingUpNum] = useState(0);

	const handleSignUpBtn = () => {
		setSingUpNum((prev) => prev + 1);
	};

	if (signUpNum === 3) {
		onNext();
		return; // signUpNum이 3이면 함수를 여기서 종료
	}

	return (
		<div css={SignUpStyle}>
			<img src={signUpData[signUpNum].img} alt="logo" />
			<div>
				{signUpData[signUpNum].preText}
				<span>{signUpData[signUpNum].highlight}</span>
				{signUpData[signUpNum].postText}
			</div>

			<FooterBtn text="다음" handleBtnClick={handleSignUpBtn}></FooterBtn>
		</div>
	);
}

export default SignUp;
