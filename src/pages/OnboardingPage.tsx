import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import CreateAccount from "@/components/Onboarding/CreateAccount/CreateAccount";
import GuideLine from "@/components/Onboarding/GuideLine/GuideLine";
import OauthSignUp from "@/components/Onboarding/OauthSignup/OauthSignUp";
import Referrer from "@/components/Onboarding/Referrer/Referrer";
import Splash from "@/components/Onboarding/Splash/Splash";

import { ONBOARDING_STEP, STEP_KEY } from "@/constants/onboarding";
import { PATH } from "@/constants/path";

function OnboardingPage() {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const step = searchParams.get(STEP_KEY);
	const validSteps = Object.values(ONBOARDING_STEP);

	useEffect(() => {
		if (step === null || validSteps.includes(step) === false) {
			setSearchParams(`${STEP_KEY}=${ONBOARDING_STEP.SPLASH}`);
		}
	}, [searchParams, step]);

	return (
		<>
			{step === ONBOARDING_STEP.SPLASH && (
				<Splash onNext={() => setSearchParams(`${STEP_KEY}=${ONBOARDING_STEP.GUIDE_LINE}`)} />
			)}

			{step === ONBOARDING_STEP.GUIDE_LINE && (
				<GuideLine onNext={() => setSearchParams(`${STEP_KEY}=${ONBOARDING_STEP.OAUTH_SIGN_UP}`)} />
			)}

			{step === ONBOARDING_STEP.OAUTH_SIGN_UP && (
				<OauthSignUp
					onNext={() => setSearchParams(`${STEP_KEY}=${ONBOARDING_STEP.CREATE_ACCOUNT}`)}
				/>
			)}

			{step === ONBOARDING_STEP.CREATE_ACCOUNT && (
				<CreateAccount onNext={() => setSearchParams(`${STEP_KEY}=${ONBOARDING_STEP.REFERRER}`)} />
			)}

			{step === ONBOARDING_STEP.REFERRER && <Referrer onNext={() => navigate(PATH.CHATTING)} />}
		</>
	);
}

export default OnboardingPage;
