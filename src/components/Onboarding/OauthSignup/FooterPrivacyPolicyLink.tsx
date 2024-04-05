import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

function FooterPrivacyPolicyLink() {
	//TODO: 약관 추가
	return (
		<footer css={container}>
			<p>서비스를 시작하시면 다음 항목에 동의하게 돼요</p>
			<div>
				<a className="line" href="#">
					서비스 이용약관
				</a>
				<a href="#">개인정보 처리방침</a>
			</div>
		</footer>
	);
}

export default FooterPrivacyPolicyLink;

const container = css`
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 1.25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 22.5rem;
	color: ${theme.color.button_deactivated};
	${theme.font.body_xs};
	& > div {
		display: flex;
	}
	.line::after {
		content: "ㅣ";
		float: right;
	}
`;
