import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import CreateAccount from "@/components/Onboarding/CreateAccount/CreateAccount";
import GuideLine from "@/components/Onboarding/GuideLine/GuideLine";
import OauthSignUp from "@/components/Onboarding/OauthSignup/OauthSignUp";
import Splash from "@/components/Onboarding/Splash/Splash";
import VisitorRoute from "@/components/Onboarding/VisitorRoute/VisitorRoute";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getIsOnboarding } from "@/api/user/userThunk";

import { ONBOARDING_STEP, STEP_KEY } from "@/constants/onboarding";
import { PATH } from "@/constants/path";

function OnboardingPage() {
	const dispatch = useAppDispatch();
	const { isOnboarding } = useAppSelector((state) => state.user);
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const step = searchParams.get(STEP_KEY);
	const validSteps = Object.values(ONBOARDING_STEP);

	useEffect(() => {
		if (step === null || validSteps.includes(step) === false) {
			setSearchParams(`${STEP_KEY}=${ONBOARDING_STEP.SPLASH}`);
		}
	}, [searchParams, step]);

	useEffect(() => {
		dispatch(getIsOnboarding());
	}, []);

	useEffect(() => {
		!isOnboarding && navigate("/");
	}, [isOnboarding]);

	return (
		<main>
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
				<CreateAccount
					onNext={() => setSearchParams(`${STEP_KEY}=${ONBOARDING_STEP.VISITOR_ROUTE}`)}
				/>
			)}

			{step === ONBOARDING_STEP.VISITOR_ROUTE && (
				<VisitorRoute onNext={() => navigate(PATH.CHATTING)} />
			)}
		</main>
	);
}

export default OnboardingPage;
