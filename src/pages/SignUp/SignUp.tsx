import { signUpText } from "@/constants/signUpText";

import { SignUpStyle } from "@/pages/SignUp/SignUp.style";

function SignUp() {
	return (
		<div css={SignUpStyle}>
			<img src="" alt="logo" />
			<pre>{signUpText[0]}</pre>
		</div>
	);
}

export default SignUp;
