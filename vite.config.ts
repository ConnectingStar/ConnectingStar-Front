import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		tsconfigPaths(),
		VitePWA({
			registerType: "autoUpdate",
			devOptions: {
				enabled: true,
			},
			manifest: {
				name: "Habit Buddy",
				short_name: "Habit Buddy",
				description:
					"작은 습관부터 큰 변화까지, 매일 실천하며 목표를 이루는 습관 형성 서비스. 별자리로 그려가는 나만의 성장지도를 만들어보세요.",
				start_url: "/",
				display: "standalone",
				background_color: "#28388B",
				theme_color: "#0176F9",
				icons: [
					{
						src: "/assets/icon-192.png",
						type: "image/png",
						sizes: "192x192",
					},
					{
						src: "/assets/icon-192.png",
						type: "image/png",
						sizes: "192x192",
						purpose: "maskable",
					},
					{
						src: "/assets/icon-512.png",
						type: "image/png",
						sizes: "512x512",
					},
					{
						src: "/assets/icon-512.png",
						type: "image/png",
						sizes: "512x512",
						purpose: "maskable",
					},
				],
				screenshots: [
					{
						src: "/assets/screenshots/screenshots-1.jpg",
						sizes: "320x580",
						type: "image/jpeg",
						label: "진행 중인 습관을 확인할 수 있는 홈 화면",
					},
					{
						src: "/assets/screenshots/screenshots-2.jpg",
						sizes: "320x580",
						type: "image/jpeg",
						label: "실천한 습관을 기록할 수 있는 실천 기록 화면",
					},
					{
						src: "/assets/screenshots/screenshots-3.jpg",
						sizes: "320x580",
						type: "image/jpeg",
						label: "별자리와 버디를 확인할 수 있는 별자리 카드 화면",
					},
					{
						src: "/assets/screenshots/screenshots-4.jpg",
						sizes: "320x580",
						type: "image/jpeg",
						label: "습관 실천과 기록을 도울 수 있는 맞춤 알림 기능 화면",
					},
					{
						src: "/assets/screenshots/screenshots-5.jpg",
						sizes: "320x580",
						type: "image/jpeg",
						label: "별자리에 별을 모두 채웠을 때 캐릭터가 등장하는 화면",
					},
					{
						src: "/assets/screenshots/screenshots-6.jpg",
						sizes: "320x580",
						type: "image/jpeg",
						label: "습관 통계를 확인할 수 있는 화면",
					},
					{
						src: "/assets/screenshots/screenshots-7.jpg",
						sizes: "320x580",
						type: "image/jpeg",
						label: "작성한 별자취를 확인할 수 있는 화면",
					},
					{
						src: "/assets/screenshots/screenshots-8.jpg",
						sizes: "320x580",
						type: "image/jpeg",
						label: "습관을 수정할 수 있는 화면",
					},
				],
			},
		}),
	],
});
