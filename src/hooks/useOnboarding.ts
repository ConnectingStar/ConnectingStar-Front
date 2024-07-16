import { useState } from "react";

export const useOnboarding = () => {
	const [onboardingRequest] = useState({
		nickname: "",
		genderType: "",
		ageRangeType: "",
		referrer: "",
		identity: "",
		runTime: { noon: "오전", hour: "10", minute: "00" },
		place: "",
		behavior: "",
		behaviorValue: 0,
		behaviorUnit: "",
		firstAlert: { noon: "오전", hour: "09", minute: "50" },
		secondAlert: { noon: "오전", hour: "10", minute: "10" },
	});

	return { onboardingRequest };
};
