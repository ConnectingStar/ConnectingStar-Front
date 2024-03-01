import { useEffect, useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";

import { signUpData } from "@/constants/onboardingConstants.";

import { SignUpStyle } from "@/components/Onboarding/SignUp.style";

function SignUp({ onNext }: { onNext: () => void }) {
	const [signUpNum, setSingUpNum] = useState(0);

	useEffect(() => {}, [signUpNum]);
	const handleSignUpBtn = () => {
		setSingUpNum((prev) => prev + 1);
		signUpNum === 3 && onNext();
	};

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
