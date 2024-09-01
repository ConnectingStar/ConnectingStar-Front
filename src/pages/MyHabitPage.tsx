import { useState, useEffect } from "react";

import { css } from "@emotion/react";

import Header from "@/components/common/Header/Header";
import HabitHistory from "@/components/MyPage/HabitHistory/HabitHistory";

import { getHabitListWithStatus, getHabitListIsEnd } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";

import { theme } from "@/styles/theme";

import { listStyle, getButtonStyle } from "@/components/MyPage/HabitHistory/HabitHistory.style";

const MyHabitPage = () => {
	const dispatch = useAppDispatch();

	const { habitListWithStatus, habitListIsEnd } = useAppSelector((state) => state.habit);

	const [tab, setTab] = useState("실천 중");

	useEffect(() => {
		dispatch(getHabitListWithStatus());
		dispatch(getHabitListIsEnd());
	}, []);

	if (!habitListWithStatus || !habitListIsEnd) {
		return <div />;
	}

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
			<ul css={listStyle}>
				<li>
					<button css={getButtonStyle(tab === "실천 중")} onClick={() => setTab("실천 중")}>
						실천 중
					</button>
				</li>
				<li>
					<button css={getButtonStyle(tab === "지난")} onClick={() => setTab("지난")}>
						지난
					</button>
				</li>
			</ul>
			<HabitHistory tab={tab} habitData={habitListWithStatus} endHabitData={habitListIsEnd} />
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
