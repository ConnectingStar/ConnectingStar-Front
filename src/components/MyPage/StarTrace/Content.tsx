import { Fragment, useRef } from "react";

import { habitIconData } from "@/constants/mypage";

import {
	layoutStyle,
	contentBoxStyle,
	iconBoxStyle,
	textBoxStyle,
} from "@/components/MyPage/StarTrace/Content.style";

interface contentType {
	date: string;
	title: string;
	achievement: number;
	content: string;
	isRest: string;
}

const Content = ({ date, title, achievement, content, isRest }: contentType) => {
	const textRef = useRef<HTMLParagraphElement>(null);

	return (
		<div css={layoutStyle}>
			<h3>{date}</h3>
			<h4>{title}</h4>
			<div css={contentBoxStyle}>
				{isRest === "휴식" ? (
					<div css={iconBoxStyle} />
				) : (
					habitIconData.map((data) => (
						<Fragment key={data.id}>{data.id === achievement && data.icon}</Fragment>
					))
				)}

				<div css={textBoxStyle}>
					<p ref={textRef}>{content}</p>
				</div>
			</div>
		</div>
	);
};

export default Content;
