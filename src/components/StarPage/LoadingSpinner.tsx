import { useEffect } from "react";

import { css } from "@emotion/react";

import { useLottie } from "lottie-react";

import loadingSpinner from "@/assets/lottie/lottie-loading-spinner.json";

import { theme } from "@/styles/theme";

const options = {
	animationData: loadingSpinner,
	loop: true,
};

const style = {
	height: 106,
	width: 106,
};

export default function LoadingSpinner() {
	const { View, setSpeed } = useLottie(options, style);

	useEffect(() => {
		setSpeed(0.8);
	}, []);

	return <div css={backgroundStyle}>{View}</div>;
}

const backgroundStyle = css`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: ${theme.zIndex.overlayPeak};
	background-color: rgba(0, 0, 0, 0.9);
`;
