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
			},
		}),
	],
});
