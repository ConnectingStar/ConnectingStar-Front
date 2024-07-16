import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import CreateAccount from "@/components/Onboarding/CreateAccount/CreateAccount";
import Referrer from "@/components/Onboarding/Referrer/Referrer";

import { ONBOARDING_STEP, STEP_KEY } from "@/constants/onboarding";
import { PATH } from "@/constants/path";

function OnboardingPage() {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const step = searchParams.get(STEP_KEY);
	const validSteps = Object.values(ONBOARDING_STEP);

	useEffect(() => {
		if (step === null || validSteps.includes(step) === false) {
			setSearchParams(`${STEP_KEY}=${ONBOARDING_STEP.CREATE_ACCOUNT}`);
		}
	}, [searchParams, step]);

	return (
		<>
			{step === ONBOARDING_STEP.CREATE_ACCOUNT && (
				<CreateAccount onNext={() => setSearchParams(`${STEP_KEY}=${ONBOARDING_STEP.REFERRER}`)} />
			)}

			{step === ONBOARDING_STEP.REFERRER && <Referrer onNext={() => navigate(PATH.CHATTING)} />}
		</>
	);
}

export default OnboardingPage;
