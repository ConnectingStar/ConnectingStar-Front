import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
import { getStarCardDetail } from "@/api/star/starThunk";

import { modalType } from "@/constants/modalConstants";
import { buttonState } from "@/constants/starPageConstants";

import { theme } from "@/styles/theme";

import { getModalType } from "@/utils/starCardDetailUtil";

export default function StarCardDetailPage() {
	const { id } = useParams();
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);
	const { starCardDetail } = useAppSelector((state) => state.star);

	const handleModal = () => {
		const modalType = getModalType(starCardDetail.status);

		if (modalType) {
			dispatch(openModal(modalType));
		}
	};

	useEffect(() => {
		dispatch(getStarCardDetail(id ?? ""));
	}, []);

	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<section css={sectionStyle}>
				<Img
					state={starCardDetail.status}
					image={starCardDetail.image}
					starCount={starCardDetail.starCount}
				/>
				<CategoryLabel typeName={starCardDetail.typeName} />
				<h1>{starCardDetail.name}</h1>
				<h2>{starCardDetail.identity}</h2>
				<Story story={starCardDetail.story} />
			</section>
			{starCardDetail.status !== "OTHER" && (
				<FooterBtn text={buttonState[starCardDetail.status]} handleBtnClick={handleModal} />
			)}

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
		margin-top: 0.375rem;
		${theme.font.head_a}
		color: ${theme.color.font_black};
	}

	& > h2 {
		margin-bottom: 2.5rem;
		${theme.font.body_a}
		color: ${theme.color.font_black};
	}
`;
