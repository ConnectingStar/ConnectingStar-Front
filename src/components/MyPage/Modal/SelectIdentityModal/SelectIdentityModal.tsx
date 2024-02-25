import { Dispatch, SetStateAction, useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import {
	layoutStyle,
	flexBoxStyle,
} from "@/components/MyPage/Modal/SelectIdentityModal/SelectIdentityModal.style";

const identityButtonData = [
	{
		text: "매일 성장하는",
	},
	{
		text: "스스로를 믿는",
	},
	{
		text: "건강한",
	},
];

const SelectIdentityModal = ({
	changeIdentity,
}: {
	changeIdentity: Dispatch<SetStateAction<string>>;
}) => {
	const dispatch = useAppDispatch();

	const [identityText, setIdentityText] = useState("매일 성장하는");

	const handleCheckClick = () => {
		changeIdentity(identityText);
		dispatch(closeModal());
	};

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>정체성을 선택해 주세요</h1>
				<div css={flexBoxStyle}>
					{identityButtonData.map((data) => (
						<button
							key={data.text}
							onClick={() => setIdentityText(data.text)}
							className={identityText === data.text ? "select" : ""}
						>
							{data.text}
						</button>
					))}
				</div>

				<FooterBtn
					text="확인"
					leftText="취소"
					handleBtnClick={handleCheckClick}
					handleLeftBtnClick={() => dispatch(closeModal())}
				/>
			</div>
		</Modal>
	);
};

export default SelectIdentityModal;
