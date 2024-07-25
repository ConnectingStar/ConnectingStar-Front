import { css } from "@emotion/react";

import Header from "@/components/common/Header/Header";

import { useAppDispatch } from "@/api/hooks";
import { postOnboardingUserInfo } from "@/api/user/userThunk";

import { visitorRouteData } from "@/constants/onboarding";

import { theme } from "@/styles/theme";

import { generateAge, generateGender } from "@/utils/generateRangeType";

import type { OnboardingProps } from "@/components/Onboarding/CreateAccount/CreateAccount";

function Referrer({ userInfoRequest, onNext }: OnboardingProps) {
	const dispatch = useAppDispatch();

	const confirmVisitorRouteData = async (referrer: string) => {
		const onboardingRequest = {
			nickname: userInfoRequest.nickname,
			genderType: generateGender(userInfoRequest.genderType),
			ageRangeType: generateAge(userInfoRequest.ageRangeType),
			referrer,
		};

		await dispatch(postOnboardingUserInfo(onboardingRequest)).unwrap();

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
					{visitorRouteData.map((referrer) => (
						<li key={referrer}>
							<button onClick={() => confirmVisitorRouteData(referrer)}>{referrer}</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default Referrer;

const container = css`
	width: 22.5rem;
	padding: 4.75rem 1.5rem;
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
