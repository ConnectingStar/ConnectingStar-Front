import { useState } from "react";

import { css } from "@emotion/react";

import { categoryData } from "@/constants/starPageConstants";

import { theme } from "@/styles/theme";

export default function CategoryTab() {
	const [select, setSelect] = useState("전체");

	return (
		<div css={containerStyle}>
			{categoryData.map((item) => (
				<button
					key={item}
					className={select === item ? "active" : ""}
					css={tabStyle}
					onClick={() => setSelect(item)}
				>
					{item}
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
