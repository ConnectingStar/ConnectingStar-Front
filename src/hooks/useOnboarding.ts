import { useCallback, useState } from "react";

import type { UserInfoType } from "@/types/userDataType";

export const useOnboarding = () => {
	const [userInfoRequest, setUserInfoRequest] = useState({
		nickname: "닉네임을 입력해 주세요",
		genderType: "성별을 선택해 주세요",
		ageRangeType: "나이대를 선택해 주세요",
		referrer: "",
	});

	const updateInputValue = useCallback(
		<Key extends keyof UserInfoType>(key: Key, value: UserInfoType[Key]) => {
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
