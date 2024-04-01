import { css } from "@emotion/react";

import google from "@/assets/icon/ic-signup.google.svg";
import kakao from "@/assets/icon/ic-signup.kakao.svg";
import LogoImg from "@/assets/image/img-logo-black.png";

import FooterPrivacyPolicyLink from "./FooterPrivacyPolicyLink";
import Header from "../../common/Header/Header";

import { theme } from "@/styles/theme";

function OauthSignUp({ onNext }: { onNext: () => void }) {
	// TODO: oauth로그인 성공 후 다음페이지로 넘어가기
	return (
		<div css={container}>
			<Header>
				<Header.CloseButton />
			</Header>
			<div css={wrap}>
				<img src={LogoImg} alt="logo" />
				<div css={oauth}>
					<button type="button" onClick={onNext}>
						<img src={kakao} alt="kakao" />
						카카오로 계속하기
					</button>
					<button type="button" onClick={onNext}>
						<img src={google} alt="google" />
						구글로 계속하기
					</button>
				</div>
			</div>
			<FooterPrivacyPolicyLink />
		</div>
	);
}

export default OauthSignUp;

const container = css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 22.5rem;
	height: 100dvh;
	padding: 1.25rem 1.5rem 0;
	margin: 0 auto;
`;

const wrap = css`
	display: flex;
	flex-direction: column;
	margin-bottom: 6.875rem;
	align-items: center;
	gap: 220px;
`;

const oauth = css`
	width: 19.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.375rem;
	& > button {
		height: 3.438rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 15px;
		gap: 0.313rem;

		&:first-of-type {
			background-color: ${theme.color.main_yellow};
		}
		&:last-of-type {
			border: 2px solid ${theme.color.line};
		}
	}
`;
