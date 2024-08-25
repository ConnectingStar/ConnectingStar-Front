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

interface SortButtonProps {
	sortOrder: string;
	handleSortOrder: (sortOrder: string) => void;
	isRest: string;
	handleIsRest: (rest: string) => void;
}

const SortButton = ({ sortOrder, handleSortOrder, isRest, handleIsRest }: SortButtonProps) => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	return (
		<div css={layoutStyle}>
			<button
				type="button"
				css={sortButtonStyle}
				onClick={() => dispatch(openModal(modalType.SORT))}
			>
				<p>{sortOrder}</p>
				<DownArrowIcon />
			</button>
			<button
				type="button"
				css={buttonStyle(isRest === "실천")}
				onClick={() => handleIsRest("실천")}
			>
				실천
			</button>
			<button
				type="button"
				css={buttonStyle(isRest === "휴식")}
				onClick={() => handleIsRest("휴식")}
			>
				휴식
			</button>

			{modal === modalType.SORT && (
				<SortModal sortOrder={sortOrder} handleSortOrder={handleSortOrder} />
			)}
		</div>
	);
};

export default SortButton;
