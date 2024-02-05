// TODO: Button 공통 컴포넌트 만들어지면 교체 예정

import { css } from "@emotion/react";

interface ButtonProps {
	children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
	return (
		<button type="button" css={buttonStyle}>
			{children}
		</button>
	);
}

const buttonStyle = css`
	width: 100%;
	padding: 1rem 0;
	border-radius: 0.9375rem;
	font-weight: 500;
	color: #fff;
	background-color: #0176f9;
`;
