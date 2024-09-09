import { Fragment } from "react";

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

				<div css={textBoxStyle(true)}>
					<p>{content === "" ? "남긴 기록이 없어요" : content}</p>
				</div>
			</div>
		</div>
	);
};

export default Content;
