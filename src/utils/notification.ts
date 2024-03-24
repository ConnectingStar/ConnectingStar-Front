import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

import { postFCMToken } from "@/api/auth/authThunk";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_APP_FCM_API_KEY,
	authDomain: import.meta.env.VITE_APP_FCM_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_APP_FCM_PROJECT_ID,
	storageBucket: import.meta.env.VITE_APP_FCM_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_APP_FCM_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_FCM_APP_ID,
	measurementId: import.meta.env.VITE_APP_FCM_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const registerServiceWorker = () => {
	navigator.serviceWorker
		.register("firebase-messaging-sw.js")
		.then(function (registration) {
			console.log("Service Worker 등록 성공:", registration);
		})
		.catch(function (error) {
			console.log("Service Worker 등록 실패:", error);
		});
};

export const handleAllowNotification = async () => {
	registerServiceWorker();

	try {
		const permission = await Notification.requestPermission();

		if (permission === "granted") {
			const nickname = "test";
			const password = "test";
			const token = await getToken(messaging, {
				vapidKey: import.meta.env.VITE_FCM_VAPID_KEY,
			});

			if (token) {
				postFCMToken({ token, nickname, password });
			} else {
				alert("토큰 등록이 불가능 합니다. 생성하려면 권한을 허용해주세요");
			}
		} else if (permission === "denied") {
			alert("web push 권한이 차단되었습니다. 알림을 사용하시려면 권한을 허용해주세요");
		}
	} catch (error) {
		console.error("푸시 토큰 가져오는 중에 에러 발생", error);
	}
};
