import { css } from "@emotion/react";

import GoogleIcon from "@/assets/icon/ic-signup.google.svg";
import KakaoIcon from "@/assets/icon/ic-signup.kakao.svg";
import LogoImg from "@/assets/image/img-logo-black.png";

import Header from "@/components/common/Header/Header";

import FooterPrivacyPolicyLink from "./FooterPrivacyPolicyLink";

import { BASE_URL } from "@/constants/api";

import { theme } from "@/styles/theme";

function OauthSignUp({ onNext }: { onNext: () => void }) {
	const kakaoLogin = () => {
		window.location.href = `${BASE_URL}oauth/code/url?socialType=K`;
	};

	return (
		<>
			<Header>
				<Header.CloseButton />
			</Header>
			<div css={container}>
				<div css={wrap}>
					<img src={LogoImg} alt="logo" />
					<div>
						<button type="button" onClick={kakaoLogin}>
							<img src={KakaoIcon} alt="kakao-icon" />
							카카오로 계속하기
						</button>
						<button type="button" onClick={onNext}>
							<img src={GoogleIcon} alt="google-icon" />
							구글로 계속하기
						</button>
					</div>
				</div>
			</div>
			<FooterPrivacyPolicyLink />
		</>
	);
}

export default OauthSignUp;

const container = css`
	display: flex;
	justify-content: center;
	width: 22.5rem;
	height: 100dvh;
	padding: 3.438rem 1.5rem 0;
	margin: 0 auto;
`;

const wrap = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	margin-bottom: 6.875rem;
	gap: 12.5rem;

	& > div {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 0.375rem;
		& > button {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 3.438rem;
			border-radius: 15px;
			gap: 0.313rem;
			&:first-of-type {
				background-color: ${theme.color.main_yellow};
			}
			&:last-of-type {
				border: 2px solid ${theme.color.line};
			}
		}
	}
`;
