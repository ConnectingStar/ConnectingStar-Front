import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";

import { GUIDE_DATA } from "@/constants/onboarding";
import { PATH } from "@/constants/path";

import { theme } from "@/styles/theme";

const GuidePage = () => {
	const [guideStep, setGuideStep] = useState(0);

	const navigate = useNavigate();

	useEffect(() => {
		if (guideStep === 3) {
			navigate(PATH.SIGN_UP);
		}
	}, [guideStep]);

	return (
		<>
			{guideStep < 3 && (
				<div css={guideBoxStyle}>
					<img src={GUIDE_DATA[guideStep].img} alt="GuideImg" />
					<pre
						dangerouslySetInnerHTML={{
							__html: GUIDE_DATA[guideStep].text,
						}}
					/>
					<FooterBtn text="다음" handleBtnClick={() => setGuideStep((prev) => prev + 1)} />
				</div>
			)}
		</>
	);
};

export default GuidePage;

const guideBoxStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.25rem 1.5rem 0;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > img {
		width: 12.5rem;
		height: 12.5rem;
		object-fit: cover;
		margin-bottom: 5rem;
	}

	& > pre {
		${theme.font.head_a};
		text-align: center;
		width: 100%;
		height: 4.375rem;

		& > span {
			color: ${theme.color.main_blue};
		}
	}
`;
