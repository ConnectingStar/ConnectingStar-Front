import { useEffect, useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { getUserIdentity, editIdentity } from "@/api/user/userThunk";

import {
	layoutStyle,
	flexBoxStyle,
} from "@/components/MyPage/Modal/SelectIdentityModal/SelectIdentityModal.style";

interface SelectIdentityModalProps {
	prevIdentity: string;
}

const SelectIdentityModal = ({ prevIdentity }: SelectIdentityModalProps) => {
	const dispatch = useAppDispatch();

	const { userIdentityList } = useAppSelector((state) => state.user);

	const [identityText, setIdentityText] = useState(prevIdentity);

	const handleChangeIdentity = () => {
		dispatch(editIdentity(identityText));
		dispatch(closeModal());
	};

	useEffect(() => {
		dispatch(getUserIdentity());
	}, []);

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>정체성을 선택해 주세요</h1>
				<div css={flexBoxStyle}>
					{userIdentityList.map((identityData) => (
						<button
							key={identityData.identity}
							onClick={() => setIdentityText(identityData.identity)}
							className={identityText === identityData.identity ? "select" : ""}
						>
							{identityData.identity}
						</button>
					))}
				</div>

				<FooterBtn
					text="확인"
					leftText="취소"
					isPositionStatic
					handleBtnClick={handleChangeIdentity}
					handleLeftBtnClick={() => dispatch(closeModal())}
				/>
			</div>
		</Modal>
	);
};

export default SelectIdentityModal;
