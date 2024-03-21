import { css } from "@emotion/react";

import starButton from "@/assets/image/img-3d-star-circle-button.png";

import { theme } from "@/styles/theme";

import { getOutlineTextStyle } from "@/components/StarPage/StarMain/getOutlineText.style";

const description = `버튼을 클릭하여 별자리를 완성하면 \n 캐릭터를 획득할 수 있어요!`;

export default function StarButton() {
	return (
		<div css={containerStyle}>
			<p data-text={description}>{description}</p>
			<button>
				<img src={starButton} alt="" />
			</button>
		</div>
	);
}

const containerStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	width: 100%;
	position: absolute;
	left: 50%;
	bottom: 4.75rem;
	transform: translateX(-50%);

	& > p {
		${getOutlineTextStyle(theme.color.main_deep_blue, "head_c")}
		white-space: pre-wrap;
		text-align: center;
	}

	& > button {
		img {
			width: 5.625rem;
			height: 5.075rem;
		}
	}
`;
