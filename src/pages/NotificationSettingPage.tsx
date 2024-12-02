import { useEffect } from "react";

import Header from "@/components/common/Header/Header";
import NotificationSetting from "@/components/MyPage/NotificationSetting/NotificationSetting";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getUserInfoV2 } from "@/api/user/userThunk";

const NotificationSettingPage = () => {
	const dispatch = useAppDispatch();

	const { userProfile } = useAppSelector((state) => state.user);

	useEffect(() => {
		dispatch(getUserInfoV2());
	}, []);

	if (!userProfile) {
		return <div />;
	}

	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.Title>알림 설정</Header.Title>
			</Header>
			<NotificationSetting
				identity={userProfile.user.identity}
				nickname={userProfile.user.nickname}
			/>
		</>
	);
};

export default NotificationSettingPage;
