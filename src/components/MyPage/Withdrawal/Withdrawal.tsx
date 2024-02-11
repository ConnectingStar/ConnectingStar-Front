import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import { layoutStyle, reasonBoxStyle } from "@/components/MyPage/Withdrawal/Withdrawal.style";

const Withdrawal = () => {
	return (
		<div css={layoutStyle}>
			<h1>어떤 이유로 탈퇴하시나요?</h1>
			<div css={reasonBoxStyle}>
				<p>탈퇴 이유를 선택해 주세요</p>
				<DownArrowIcon />
			</div>
			<button type="button">작별하기</button>
		</div>
	);
};

export default Withdrawal;
