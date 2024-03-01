import { css } from "@emotion/react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Splash({ onNext }: { onNext: () => void }) {
	return (
		<div css={container} onClick={onNext}>
			<img src="" alt="logo" />
			<p>로고</p>
		</div>
	);
}

export default Splash;

const container = css`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	& > img {
		width: 100px;
		height: 100px;
		background-color: #d9d9d9;
	}
`;
