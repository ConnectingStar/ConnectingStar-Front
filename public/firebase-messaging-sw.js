// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

self.addEventListener("install", function () {
	self.skipWaiting();
});

self.addEventListener("activate", function () {
	console.log("fcm service worker가 실행되었습니다.");
});

self.addEventListener("push", function (e) {
	if (!e.data.json()) return;

	const resultData = e.data.json().notification;
	const notificationUrl = e.data.json().data.click_action;
	const notificationTitle = resultData.title;

	const notificationOptions = {
		body: resultData.body,
		icon: "/assets/icon-192.png",
		badge: "/assets/android-notification-icon.png",
		data: {
			notificationUrl,
		},
	};

	console.log(resultData.title, {
		body: resultData.body,
	});

	e.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
});

self.addEventListener("notificationclick", (e) => {
	e.notification.close();

	const notificationUrl = new URL(e.notification.data.notificationUrl);

	const focusOrOpenWindow = async () => {
		const clientList = await clients.matchAll({
			type: "window",
			includeUncontrolled: true,
		});

		const matchingClient = clientList.find((client) => {
			const clientUrl = new URL(client.url);
			return clientUrl.origin === notificationUrl.origin;
		});

		if (!matchingClient) {
			return clients.openWindow(notificationUrl);
		}

		if ("focus" in matchingClient) {
			return matchingClient.focus();
		}
	};

	e.waitUntil(focusOrOpenWindow());
});
