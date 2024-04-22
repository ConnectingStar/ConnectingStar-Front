import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

const ToastBase = () => <div css={layoutStyle} id="toast-container" />;

export default ToastBase;

const layoutStyle = css`
	position: fixed;
	bottom: 5.5rem;
	display: flex;
	flex-direction: column;
	gap: 16px;
	justify-content: center;
	align-items: center;
	max-width: 500px;
	margin: 0 auto;
	width: 100%;
	z-index: ${theme.zIndex.overlayPeak};
`;
