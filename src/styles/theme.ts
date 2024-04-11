export const theme = {
	font: {
		head_a: {
			fontSize: "1.5rem",
			fontWeight: "500",
		},
		head_b: {
			fontSize: "1rem",
			fontWeight: "500",
		},
		head_c: {
			fontSize: "0.875rem",
			fontWeight: "700",
		},
		body_a: {
			fontSize: "1rem",
		},
		body_a_bold: {
			fontSize: "1rem",
			fontWeight: "700",
		},
		body_b: {
			fontSize: "0.875rem",
		},
		body_b_bold: {
			fontSize: "0.875rem",
			fontWeight: "700",
		},
		body_c: {
			fontSize: "0.75rem",
		},
		body_c_bold: {
			fontSize: "0.75rem",
			fontWeight: "500",
		},
		body_xs: {
			fontSize: "0.6875rem",
		},
		time: {
			fontSize: "1.75rem",
			fontWeight: "500",
		},
		header: {
			fontSize: "1.25rem",
			fontWeight: "500",
		},
		button_big: {
			fontSize: "1rem",
			fontWeight: "500",
		},
	},
	color: {
		// 폰트 색상
		font_black: "#111111",
		font_deep_gray: "#505050",
		font_gray: "#767676",

		// 색상
		main_deep_blue: "#385678",
		main_blue: "#0176F9",
		main_light_blue: "#E6F1FE",
		main_yellow: "#FFE276",

		// 줄, 배경
		line: "#F0F0F6",
		bg: "#F7F7FB",

		// 버튼
		button_disabled: "#E5E5EC",
		button_deactivated: "#999999",

		// 시스템 색상
		success: "#04B014",
		error: "#DC0000",

		// 실천 아이콘 색상
		very_bad: "#a5aeff",
		bad: "#8cf8ff",
		normal: "#b7ff6e",
		good: "#ffe276",
		very_good: "#ffc1f9",
	},
	zIndex: {
		overlayBottom: 10,
		overlayMiddle: 20,
		overlayTop: 30,
		overlayPeak: 40,
	} as const,
};
