import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CreateAccount from "@/components/Onboarding/CreateAccount/CreateAccount";
import OauthSignUp from "@/components/Onboarding/OauthSignup/OauthSignUp";
import SignUp from "@/components/Onboarding/SignUp/SignUp";
import Splash from "@/components/Onboarding/Splash/Splash";
import VisitorRoute from "@/components/Onboarding/VisitorRoute/VisitorRoute";

import { useAppSelector } from "@/api/hooks";

function OnboardingPage() {
	const { isLogin } = useAppSelector((state) => state.auth);

	console.log(isLogin);

	// login 상태에서는 현재 페이지에 접근 시 home으로 리다이렉트해야합니다.

	const navigate = useNavigate();

	const [step, setStep] = useState<
		"Splash" | "SignUp" | "OauthSignUp" | "CreateAccount" | "VisitorRoute" | string
	>("Splash");

	return (
		<main>
			{step === "Splash" && <Splash onNext={() => setStep("SignUp")} />}
			{step === "SignUp" && <SignUp onNext={() => setStep("OauthSignUp")} />}
			{step === "OauthSignUp" && <OauthSignUp onNext={() => setStep("CreateAccount")} />}
			{step === "CreateAccount" && <CreateAccount onNext={() => setStep("VisitorRoute")} />}
			{step === "VisitorRoute" && <VisitorRoute onNext={() => navigate("/chatting")} />}
		</main>
	);
}

export default OnboardingPage;
