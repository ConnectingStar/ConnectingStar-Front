import { Dispatch, SetStateAction, useState } from "react";

import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { buttonBoxStyle } from "@/components/MyPage/MyInfo/SelectCharacterModal/SelectCharacterModal.style";
import {
	layoutStyle,
	flexBoxStyle,
} from "@/components/MyPage/MyInfo/SelectIdentityModal/SelectIdentityModal.style";

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

				<div css={buttonBoxStyle}>
					<button type="button" className="cancel" onClick={() => dispatch(closeModal())}>
						취소
					</button>
					<button type="button" onClick={handleCheckClick}>
						확인
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default SelectIdentityModal;
