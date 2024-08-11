import GoogleIcon from "@/assets/icon/ic-signup.google.svg?react";
import KakaoIcon from "@/assets/icon/ic-signup.kakao.svg?react";
import LogoImg from "@/assets/image/img-logo-black.png";

import { OAUTH_KAKAO_URL } from "@/constants/api";

import {
	layoutStyle,
	boxStyle,
	buttonBoxStyle,
	privacyBoxStyle,
} from "@/pages/SignUpPage/SignUpPage.style";

const SignUpPage = () => {
	return (
		<div css={layoutStyle}>
			<div css={boxStyle}>
				<img src={LogoImg} alt="logo" />
				<div css={buttonBoxStyle}>
					<button type="button" onClick={() => window.location.assign(OAUTH_KAKAO_URL)}>
						<KakaoIcon />
						카카오로 계속하기
					</button>
					<button type="button">
						<GoogleIcon />
						구글로 계속하기
					</button>
				</div>
			</div>

			<div css={privacyBoxStyle}>
				<p>서비스를 시작하시면 다음 항목에 동의하게 돼요</p>
				<span>
					<a
						className="line"
						href="https://habit-buddy.notion.site/4c168fc92ca54c66b2cd95cae28b1e6d"
					>
						서비스 이용약관
					</a>
					<a href="https://habit-buddy.notion.site/24132eec53ad457b944742e551f522b2">
						개인정보 처리방침
					</a>
				</span>
			</div>
		</div>
	);
};

export default SignUpPage;
