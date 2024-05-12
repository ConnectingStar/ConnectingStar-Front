import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CreateAccount from "@/components/Onboarding/CreateAccount/CreateAccount";
import OauthSignUp from "@/components/Onboarding/OauthSignup/OauthSignUp";
import SignUp from "@/components/Onboarding/SignUp/SignUp";
import Splash from "@/components/Onboarding/Splash/Splash";
import VisitorRoute from "@/components/Onboarding/VisitorRoute/VisitorRoute";

import { axiosInstance } from "@/api/axiosInstance";
import { useAppSelector } from "@/api/hooks";

function OnboardingPage() {
	const navigate = useNavigate();
	const { isLogin } = useAppSelector((state) => state.auth);
	const [step, setStep] = useState<
		"Splash" | "SignUp" | "OauthSignUp" | "CreateAccount" | "VisitorRoute"
	>("Splash");

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const urlStep = urlParams.get("step");
		if (urlStep)
			setStep(urlStep as "Splash" | "SignUp" | "OauthSignUp" | "CreateAccount" | "VisitorRoute");
	}, []);

	useEffect(() => {
		if (isLogin) {
			axiosInstance.get("/user/check-onboarding").then((response) => {
				if (response.data.data.onboard) {
					navigate("/");
				}
			});
		}
	}, [isLogin, step]);

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
