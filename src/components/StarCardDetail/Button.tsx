// TODO: Button 공통 컴포넌트 만들어지면 교체 예정

import { buttonStyle } from "@/components/StarCardDetail/Button.style";

interface ButtonProps {
	children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
	return <button css={buttonStyle}>{children}</button>;
}
