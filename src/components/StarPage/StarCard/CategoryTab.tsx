// import { useState } from "react";

import { css } from "@emotion/react";

import { categoryData } from "@/constants/starPageConstants";

import { theme } from "@/styles/theme";

interface CategoryTabProps {
	select: { id: number; title: string };
	onSelect: (id: number, item: string) => void;
}

export default function CategoryTab({ select, onSelect }: CategoryTabProps) {
	return (
		<div css={containerStyle}>
			{categoryData.map((item) => (
				<button
					key={item.id}
					className={select.title === item.title ? "active" : ""}
					css={tabStyle}
					onClick={() => onSelect(item.id, item.title)}
				>
					{item.title}
				</button>
			))}
		</div>
	);
}

const containerStyle = css`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 6px;
`;

const tabStyle = css`
	width: 6.25rem;
	padding: 1rem 0;
	border-radius: 15px;
	${theme.font.body_a_bold}
	color: ${theme.color.button_deactivated};
	background-color: ${theme.color.button_disabled};

	&.active {
		color: #fff;
		background-color: ${theme.color.main_blue};
	}
`;
