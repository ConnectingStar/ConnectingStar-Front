import { useDispatch } from "react-redux";

import { css } from "@emotion/react";

import Header from "@/components/common/Header/Header";

import { updateVisitorRoute } from "@/api/user/userSlice";

import { visitorRouteData } from "@/constants/onboardingConstants";

import { theme } from "@/styles/theme";

function VisitorRoute({ onNext }: { onNext: () => void }) {
	const dispatch = useDispatch();
	const confirmVisitorRouteData = (visitorRoute: string) => {
		dispatch(updateVisitorRoute(visitorRoute));
		onNext();
	};
	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<div css={container}>
				<h1>어떤 경로를 통해 오셨나요?</h1>
				<ul>
					{visitorRouteData.map((item) => (
						<li key={item}>
							<button onClick={() => confirmVisitorRouteData(item)}>{item}</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default VisitorRoute;

const container = css`
	width: 22.5rem;
	padding: 1.25rem 1.5rem;
	margin: 0 auto;
	& > h1 {
		margin-bottom: 2.5rem;
		${theme.font.head_a}
	}
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 3.438rem;
		border: 2px solid ${theme.color.line};
		border-radius: 15px;
		margin-bottom: 0.375rem;
		${theme.font.button_big}
	}
`;
