import { css } from "@emotion/react";

import starButton from "@/assets/image/img-3d-star-circle-button.png";

import { theme } from "@/styles/theme";

import { getOutlineTextStyle } from "@/components/StarPage/StarMain/getOutlineText.style";

const description = `버튼을 클릭하여 별자리를 완성하면 \n 캐릭터를 획득할 수 있어요!`;

export default function StarButton() {
	return (
		<div css={containerStyle}>
			<p css={getOutlineTextStyle(theme.color.main_deep_blue)} data-text={description}>
				{description}
			</p>
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

	& > button {
		width: 5.625rem;
		height: 5.0625rem;
	}
`;
