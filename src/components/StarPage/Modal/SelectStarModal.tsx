import { useNavigate, useParams } from "react-router-dom";

import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { selectStar } from "@/api/user/userThunk";

import { PATH } from "@/constants/path";

import { theme } from "@/styles/theme";

export default function SelectStarModal() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { id } = useParams();

	const handleFooterBtnClick = async () => {
		try {
			await dispatch(selectStar(id ?? "")).unwrap();
			navigate(PATH.STAR);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Modal>
			<div css={containerStyle}>
				<h1>이 별자리로 선택할까요? </h1>
				<p>
					한 번 선택하면 완료할 때까지 바꿀 <br /> 수 없어요! 그대로 진행할까요?
				</p>
				<FooterBtn
					text="선택"
					leftText="취소"
					handleBtnClick={handleFooterBtnClick}
					handleLeftBtnClick={() => dispatch(closeModal())}
					isPositionStatic
				/>
			</div>
		</Modal>
	);
}

const containerStyle = css`
	width: 18rem;
	padding: 1rem;
	border-radius: 15px;
	color: ${theme.color.font_black};
	background-color: #fff;

	h1 {
		margin-bottom: 1.25rem;
		font-size: 1.125rem;
		font-weight: 700;
	}

	p {
		margin-bottom: 2.5rem;
	}
`;
