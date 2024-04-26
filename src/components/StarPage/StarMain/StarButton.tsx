import { css } from "@emotion/react";

import starButton from "@/assets/image/img-3d-star-circle-button.png";

import { theme } from "@/styles/theme";

import { getOutlineTextStyle } from "@/components/StarPage/StarMain/Star.style";

const description = `버튼을 클릭하여 별자리를 완성하면 \n 버디를 획득할 수 있어요!`;

interface StarButtonProps {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function StarButton({ onClick }: StarButtonProps) {
	return (
		<div css={containerStyle}>
			<p data-text={description}>{description}</p>
			<button onClick={onClick}>
				<img src={starButton} alt="별 모양 버튼" />
			</button>
		</div>
	);
}

const containerStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;

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
