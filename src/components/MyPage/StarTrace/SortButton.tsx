import { useState } from "react";

import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import SortModal from "@/components/MyPage/Modal/SortModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import {
	layoutStyle,
	sortButtonStyle,
	buttonStyle,
} from "@/components/MyPage/StarTrace/SortButton.style";

const SortButton = () => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const [sortOption, setSortOption] = useState("최신순");

	return (
		<div css={layoutStyle}>
			<button
				type="button"
				css={sortButtonStyle}
				onClick={() => dispatch(openModal(modalType.SORT))}
			>
				<p>{sortOption}</p>
				<DownArrowIcon />
			</button>
			<button type="button" css={buttonStyle}>
				실천
			</button>
			<button type="button" css={buttonStyle}>
				휴식
			</button>

			{modal === modalType.SORT && (
				<SortModal sortOption={sortOption} changeSortOption={setSortOption} />
			)}
		</div>
	);
};

export default SortButton;
