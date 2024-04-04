import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import SelectProfileCharacterModal from "@/components/StarPage/Modal/SelectProfileCharacterModal";
import SelectStarModal from "@/components/StarPage/Modal/SelectStarModal";
import CategoryLabel from "@/components/StarPage/StarCardDetail/CategoryLabel";
import Img from "@/components/StarPage/StarCardDetail/Img";
import Story from "@/components/StarPage/StarCardDetail/Story";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";
import { buttonState } from "@/constants/starPageConstants";

import { theme } from "@/styles/theme";

import { getModalType } from "@/utils/starCardDetailUtil";

// TODO: API 연결 후 삭제 예정(상태에 따른 Img, Button UI 변경 확인 용)
interface DataType {
	state: "default" | "selected" | "have";
}

// TODO: API 연결 후 삭제 예정(상태에 따른 Img, Button UI 변경 확인 용)
const data: DataType = {
	state: "have",
};

export default function StarCardDetailPage() {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const handleModal = () => {
		const modalType = getModalType(data.state);

		if (modalType) {
			dispatch(openModal(modalType));
		}
	};

	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<section css={sectionStyle}>
				<Img state={data.state} />
				<h2>캐릭터 설명 문구</h2>
				<h1>캐릭터 이름</h1>
				<CategoryLabel />
				<Story />
			</section>
			<FooterBtn text={buttonState[data.state]} handleBtnClick={handleModal} isTransparent />

			{modal === modalType.SELECT_STAR && <SelectStarModal />}
			{modal === modalType.SELECT_PROFILE_CHARACTER && <SelectProfileCharacterModal />}
		</>
	);
}

const sectionStyle = css`
	width: 22.5rem;
	padding: 4.75rem 1.5rem 5.4375rem;
	margin: 0 auto;

	& > h1 {
		margin-bottom: 0.5625rem;
		${theme.font.head_a}
		color: ${theme.color.font_black};
	}

	& > h2 {
		${theme.font.head_b}
		color: ${theme.color.main_blue};
	}
`;
