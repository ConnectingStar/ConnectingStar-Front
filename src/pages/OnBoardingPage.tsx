import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CreateAccount from "@/components/Onboarding/CreateAccount";
import OauthSignUp from "@/components/Onboarding/OauthSignup/OauthSignUp";
import SignUp from "@/components/Onboarding/SignUp";
import Splash from "@/components/Onboarding/Splash";
import VisitorRoute from "@/components/Onboarding/VisitorRoute";

function OnboardingPage() {
	const navigate = useNavigate();
	const [step, setStep] = useState<
		"Splash" | "SignUp" | "OauthSignUp" | "CreateAccount" | "VisitorRoute"
	>("Splash");

	//TODO: 테스트용 merge후 제거 예정
	// VisitorRoute 빼고는 확인가능
	const user = useSelector((state) => state.user);
	console.log(user);

	return (
		<main>
			{step === "Splash" && (
				<Splash
					onNext={() => {
						setStep("SignUp");
					}}
				/>
			)}
			{step === "SignUp" && (
				<SignUp
					onNext={() => {
						setStep("OauthSignUp");
					}}
				/>
			)}
			{step === "OauthSignUp" && (
				<OauthSignUp
					onNext={() => {
						setStep("CreateAccount");
					}}
				/>
			)}
			{step === "CreateAccount" && (
				<CreateAccount
					onNext={() => {
						setStep("VisitorRoute");
					}}
				/>
			)}
			{step === "VisitorRoute" && (
				<VisitorRoute
					onNext={() => {
						navigate("/chatting");
					}}
				/>
			)}
		</main>
	);
}

export default OnboardingPage;
