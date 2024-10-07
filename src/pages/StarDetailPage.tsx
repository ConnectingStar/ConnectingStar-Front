import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import SelectProfileImageModal from "@/components/StarPage/Modal/SelectProfileImageModal";
import SelectStarModal from "@/components/StarPage/Modal/SelectStarModal";
import Img from "@/components/StarPage/StarDetail/Img";
import Story from "@/components/StarPage/StarDetail/Story";
import { StarDetailStatus } from "@/types/star";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";
import { getStarDetail } from "@/api/star/starThunk";

import { modalType } from "@/constants/modalConstants";
import { PATH } from "@/constants/path";
import { STAR_DETAIL_STATUS } from "@/constants/starPageConstants";
import { buttonState } from "@/constants/starPageConstants";

import { theme } from "@/styles/theme";

import { generateName } from "@/utils/starUtils";

const { PROGRESS, SELECT, COMPLETE, OTHER } = STAR_DETAIL_STATUS;

export default function StarDetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);
	const { starDetail } = useAppSelector((state) => state.star);

	const handleFooterBtnClick = (status: StarDetailStatus) => {
		switch (status) {
			case PROGRESS:
				return navigate(PATH.STAR);
			case SELECT:
				return dispatch(openModal(modalType.SELECT_STAR));
			case COMPLETE:
				return dispatch(openModal(modalType.SELECT_PROFILE_IMAGE));
			default:
				return;
		}
	};

	useEffect(() => {
		dispatch(getStarDetail(id ?? ""));
	}, []);

	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>
			<section css={sectionStyle}>
				<Img state={starDetail.status} image={starDetail.image} starCount={starDetail.starCount} />
				<p css={categoryLabelStyle}>{starDetail.typeName}</p>
				<h1>{generateName(starDetail.name, starDetail.status)}</h1>
				<h2>{starDetail.identity}</h2>
				<Story story={starDetail.story} />
			</section>

			{starDetail.status !== OTHER && (
				<FooterBtn
					text={buttonState[starDetail.status]}
					handleBtnClick={() => handleFooterBtnClick(starDetail.status)}
					disabled={starDetail.isProfile}
				/>
			)}

			{modal === modalType.SELECT_STAR && <SelectStarModal />}
			{modal === modalType.SELECT_PROFILE_IMAGE && <SelectProfileImageModal />}
		</>
	);
}

const sectionStyle = css`
	width: 22.5rem;
	padding: calc(4.75rem + env(safe-area-inset-top)) 1.5rem 5.4375rem;
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

const categoryLabelStyle = css`
	width: 4.9375rem;
	padding: 0.5rem 0;
	border-radius: 0.9375rem;
	${theme.font.body_c_bold};
	text-align: center;
	color: ${theme.color.main_blue};
	background-color: ${theme.color.main_light_blue};
`;
