import { css } from "@emotion/react";

import Header from "@/components/common/Header/Header";
import HabitHistory from "@/components/MyPage/HabitHistory/HabitHistory";
import { theme } from "@/styles/theme";

const MyHabitPage = () => {
	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.Title>
					<p css={titleStyle}>
						<span>습관 현황</span>
						<span>히스토리</span>
					</p>
				</Header.Title>
			</Header>
			<HabitHistory />
		</>
	);
};

export default MyHabitPage;

export const titleStyle = css`
	& > span {
		position: relative;
		margin-right: 1.25rem;

		&:last-of-type {
			margin-right: 0;
		}

		&::after {
			content: "ㅣ";
			color: ${theme.color.main_blue};
			position: absolute;
			top: 0;
			right: -1.25rem;
		}

		&:last-of-type::after {
			content: none;
		}
	}
`;
