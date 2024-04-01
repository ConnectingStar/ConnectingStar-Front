import google from "@/assets/icon/ic-signup.google.svg";
import kakao from "@/assets/icon/ic-signup.kakao.svg";

import { oauthSignUpStyle } from "@/components/Onboarding/OauthSignUp.style";
function OauthSignUp() {
	return (
		<div css={oauthSignUpStyle.container}>
			<div css={oauthSignUpStyle.logo}>
				<img src="" alt="logo" />
				<p>로고</p>
			</div>
			<div css={oauthSignUpStyle.oauth}>
				<button type="button">
					<img src={kakao} alt="kakao" />
					카카오로 계속하기
				</button>
				<button type="button">
					<img src={google} alt="google" />
					구글로 계속하기
				</button>
			</div>
			<footer css={oauthSignUpStyle.footer}>
				<p>서비스를 시작하시면 다음 항목에 동의하게 돼요</p>
				<div>
					<a className="line">서비스 이용약관</a>
					<a>개인정보 처리방침</a>
				</div>
			</footer>
		</div>
	);
}

export default OauthSignUp;
