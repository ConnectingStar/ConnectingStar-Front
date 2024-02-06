// TODO: Button 공통 컴포넌트 만들어지면 교체 예정

import { buttonStyle } from "@/components/CardDetail/Button.style";
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
