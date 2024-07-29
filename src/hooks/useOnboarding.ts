import { useCallback, useState } from "react";

import type { OnboardingUserInfoType } from "@/types/user";

export const useOnboarding = () => {
	const [userInfoRequest, setUserInfoRequest] = useState({
		nickname: "닉네임을 입력해 주세요",
		genderType: "성별을 선택해 주세요",
		ageRangeType: "나이대를 선택해 주세요",
		referrer: "",
	});

	const updateInputValue = useCallback(
		<Key extends keyof OnboardingUserInfoType>(key: Key, value: OnboardingUserInfoType[Key]) => {
			setUserInfoRequest((prevUserInfoRequest) => {
				const data = {
					...prevUserInfoRequest,
					[key]: value,
				};

				return data;
			});
		},
		[],
	);

	return { userInfoRequest, updateInputValue };
};
