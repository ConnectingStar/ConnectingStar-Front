import { css } from "@emotion/react";

import Charater from "@/assets/image/img-charater.png";
import Logo from "@/assets/image/img-logo-white.png";

function Splash({ onNext }: { onNext: () => void }) {
	return (
		<div css={container} onClick={onNext}>
			<div>
				<img src={Charater} alt="charater" />
				<img src={Logo} alt="logo" />
			</div>
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
	background-color: #020274;
	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 150px;
		height: 200px;
	}
`;
