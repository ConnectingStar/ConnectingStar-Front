import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CreateAccount from "@/components/Onboarding/CreateAccount/CreateAccount";
import OauthSignUp from "@/components/Onboarding/OauthSignup/OauthSignUp";
import SignUp from "@/components/Onboarding/SignUp/SignUp";
import Splash from "@/components/Onboarding/Splash/Splash";
import VisitorRoute from "@/components/Onboarding/VisitorRoute/VisitorRoute";

function OnboardingPage() {
	const navigate = useNavigate();
	const [step, setStep] = useState<
		"Splash" | "SignUp" | "OauthSignUp" | "CreateAccount" | "VisitorRoute" | string
	>("Splash");

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const urlStep = urlParams.get("step");
		if (urlStep) setStep(urlStep);
	}, []);

	useEffect(() => {
		const firstVisit = localStorage.getItem("First visit");
		if (firstVisit === "false" && step === "CreateAccount") {
			navigate("/");
		}
	}, [step]);

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
