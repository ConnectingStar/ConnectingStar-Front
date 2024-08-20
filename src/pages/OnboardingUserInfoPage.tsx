import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import CreateAccount from "@/components/Onboarding/CreateAccount/CreateAccount";
import Referrer from "@/components/Onboarding/Referrer/Referrer";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getIsOnboarding } from "@/api/user/userThunk";

import { ONBOARDING_STEP, STEP_KEY } from "@/constants/onboarding";
import { PATH } from "@/constants/path";

import { useOnboarding } from "@/hooks/useOnboarding";

const OnboardingUserInfoPage = () => {
	const dispatch = useAppDispatch();

	const { isOnboarding } = useAppSelector((state) => state.user);

	const navigate = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();

	const { userInfoRequest, updateInputValue } = useOnboarding();

	const step = searchParams.get(STEP_KEY);
	const validSteps = Object.values(ONBOARDING_STEP);

	useEffect(() => {
		if (step === null || validSteps.includes(step) === false) {
			setSearchParams(`${STEP_KEY}=${ONBOARDING_STEP.CREATE_ACCOUNT}`);
		}
	}, [searchParams, step]);

	useEffect(() => {
		dispatch(getIsOnboarding());
	}, []);

	useEffect(() => {
		isOnboarding && navigate(PATH.HOME);
	}, [isOnboarding]);

	console.log(isOnboarding);

	return (
		<>
			{step === ONBOARDING_STEP.CREATE_ACCOUNT && (
				<CreateAccount
					userInfoRequest={userInfoRequest}
					updateInputValue={updateInputValue}
					onNext={() => setSearchParams(`${STEP_KEY}=${ONBOARDING_STEP.REFERRER}`)}
				/>
			)}

			{step === ONBOARDING_STEP.REFERRER && (
				<Referrer
					userInfoRequest={userInfoRequest}
					onNext={() => navigate(PATH.ONBOARDING_HABIT)}
				/>
			)}
		</>
	);
};

export default OnboardingUserInfoPage;
