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
	const notificationTitle = resultData.title;

	const notificationOptions = {
		body: resultData.body,
	};

	console.log(resultData.title, {
		body: resultData.body,
	});

	e.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
});
