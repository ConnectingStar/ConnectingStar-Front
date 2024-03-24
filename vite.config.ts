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
				name: "Tars",
				short_name: "Tars",
				start_url: "/",
				display: "standalone",
				background_color: "#ffffff",
				theme_color: "#0176F9",
				icons: [
					{
						src: "/icon-192.png",
						type: "image/png",
						sizes: "192x192",
					},
					{
						src: "/icon-192-maskable.png",
						type: "image/png",
						sizes: "192x192",
						purpose: "maskable",
					},
					{
						src: "/icon-512.png",
						type: "image/png",
						sizes: "512x512",
					},
					{
						src: "/icon-512-maskable.png",
						type: "image/png",
						sizes: "512x512",
						purpose: "maskable",
					},
				],
			},
		}),
	],
});
