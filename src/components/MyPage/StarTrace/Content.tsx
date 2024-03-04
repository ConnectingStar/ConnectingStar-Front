import { Fragment } from "react";

import { habitIconData } from "@/constants/myPageConstants";

import {
	layoutStyle,
	contentBoxStyle,
	textBoxStyle,
} from "@/components/MyPage/StarTrace/Content.style";

interface contentType {
	date: string;
	title: string;
	habitPractice: number;
	content: string;
}

const Content = ({ date, title, habitPractice, content }: contentType) => {
	return (
		<div css={layoutStyle}>
			<h3>{date}</h3>
			<h4>{title}</h4>
			<div css={contentBoxStyle}>
				{habitIconData.map((data) => (
					<Fragment key={data.id}>{data.id === habitPractice && data.icon}</Fragment>
				))}
				<div css={textBoxStyle}>
					<p>{content}</p>
				</div>
			</div>
		</div>
	);
};

export default Content;
