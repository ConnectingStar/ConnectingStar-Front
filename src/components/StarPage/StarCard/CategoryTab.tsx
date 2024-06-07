import { css } from "@emotion/react";

import { categoryData } from "@/constants/starPageConstants";
import { TAB_KEY } from "@/constants/tabConstants";

import { theme } from "@/styles/theme";

interface CategoryTabProps {
	searchParams: URLSearchParams;
	onTabClick: (param: string) => void;
}

export default function CategoryTab({ searchParams, onTabClick }: CategoryTabProps) {
	return (
		<div css={containerStyle}>
			{categoryData.map((item) => (
				<button
					key={item.id}
					className={searchParams.get(TAB_KEY) === item.param ? "active" : ""}
					css={tabStyle}
					onClick={() => onTabClick(item.param)}
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
