import { useEffect } from "react";

import { useToast } from "@/hooks/useToast";

export const useNetworkStatus = () => {
	const { createToast } = useToast();

	useEffect(() => {
		const handleOffline = () => {
			if (!navigator.onLine) {
				createToast("네트워크 연결상태가 좋지 않습니다. 확인 후 다시 시도해 주세요.");
			}
		};

		// PWA에서 초기 네트워크 상태 감지를 위해 호출
		handleOffline();

		window.addEventListener("offline", handleOffline);

		return () => {
			window.removeEventListener("offline", handleOffline);
		};
	}, []);
};
