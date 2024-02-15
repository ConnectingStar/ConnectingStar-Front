import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import {
	layoutStyle,
	sortButtonStyle,
	buttonStyle,
} from "@/components/MyPage/StarTrace/SortButton.style";

const SortButton = () => {
	return (
		<div css={layoutStyle}>
			<button type="button" css={sortButtonStyle}>
				<p>최신순</p>
				<DownArrowIcon />
			</button>
			<button type="button" css={buttonStyle}>
				실천
			</button>
			<button type="button" css={buttonStyle}>
				휴식
			</button>
		</div>
	);
};

export default SortButton;
