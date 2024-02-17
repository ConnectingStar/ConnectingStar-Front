import { Dispatch, SetStateAction, useState } from "react";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import CheckIcon from "@/assets/icon/ic-check.svg?react";
import Modal from "@/components/common/Modal/Modal";

import { buttonBoxStyle } from "@/components/MyPage/MyInfo/SelectCharacterModal/SelectCharacterModal.style";
import {
	layoutStyle,
	getCheckBoxLabelStyle,
} from "@/components/MyPage/MyInfo/SelectGenderModal/SelectGenderModal.style";

const sortData = [
	{
		text: "최신순",
	},
	{
		text: "오래된순",
	},
];

const SortModal = ({
	changeSortOption,
}: {
	changeSortOption: Dispatch<SetStateAction<string>>;
}) => {
	const dispatch = useAppDispatch();

	const [checkItem, setCheckItem] = useState("최신순");

	const handleCheckClick = () => {
		changeSortOption(checkItem);
		dispatch(closeModal());
	};

	return (
		<Modal>
			<div css={layoutStyle}>
				<h1>정렬기준</h1>
				<ul>
					{sortData.map((data) => (
						<li>
							<input type="checkbox" id={data.text} onChange={() => setCheckItem(data.text)} />
							<label htmlFor={data.text} css={getCheckBoxLabelStyle(checkItem === data.text)}>
								{checkItem === data.text && <CheckIcon />}
							</label>
							<p>{data.text}</p>
						</li>
					))}
				</ul>

				<div css={buttonBoxStyle}>
					<button className="cancel" onClick={() => dispatch(closeModal())}>
						취소
					</button>
					<button onClick={handleCheckClick}>확인</button>
				</div>
			</div>
		</Modal>
	);
};

export default SortModal;
