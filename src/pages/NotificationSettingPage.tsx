import Header from "@/components/common/Header/Header";
import NotificationSetting from "@/components/MyPage/NotificationSetting/NotificationSetting";

const NotificationSettingPage = () => {
	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.Title>알림 설정</Header.Title>
			</Header>
			<NotificationSetting />
		</>
	);
};

export default NotificationSettingPage;
