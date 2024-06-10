import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { css } from "@emotion/react";

import Toggle from "@/components/common/Button/Toggle/Toggle";
import Header from "@/components/common/Header/Header";
import CategoryTab from "@/components/StarPage/StarCard/CategoryTab";
import StarCard from "@/components/StarPage/StarCard/StarCard";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getStarCard } from "@/api/star/starThunk";

import { categoryData, TOGGLE_KEY } from "@/constants/starPageConstants";
import { TAB_KEY } from "@/constants/tabConstants";

import { useToggleTrigger } from "@/hooks/useToggleTrigger";

import { theme } from "@/styles/theme";

import { findCategoryItem, validateCategoryParams, validateToggleParams } from "@/utils/starUtils";

const StarCardPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { isToggle, handleTogglePrev } = useToggleTrigger();
	const dispatch = useAppDispatch();
	const { starCard } = useAppSelector((state) => state.star);

	const handleCategoryTabClick = (param: string) => {
		setSearchParams({ [TAB_KEY]: param, [TOGGLE_KEY]: `${isToggle}` }, { replace: true });
	};

	const handleToggleClick = () => {
		handleTogglePrev();
		setSearchParams(
			{ [TAB_KEY]: `${searchParams.get(TAB_KEY)}`, [TOGGLE_KEY]: `${!isToggle}` },
			{ replace: true },
		);
	};

	useEffect(() => {
		const isCategoryParamValid = validateCategoryParams(categoryData, searchParams.get(TAB_KEY));
		const isToggleParamValid = validateToggleParams(searchParams.get(TOGGLE_KEY));

		if (searchParams.size === 0 || !isCategoryParamValid || !isToggleParamValid) {
			setSearchParams(
				{ [TAB_KEY]: categoryData[0].param, [TOGGLE_KEY]: "false" },
				{ replace: true },
			);
		}
	}, [searchParams]);

	useEffect(() => {
		const categoryItem = findCategoryItem(categoryData, searchParams.get(TAB_KEY));

		if (categoryItem === undefined) return;

		dispatch(
			getStarCard({
				id: categoryItem.id === 0 ? "" : String(categoryItem.id),
				isRegistered: isToggle,
			}),
		);
	}, [searchParams]);

	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.Title>별자리 카드</Header.Title>
			</Header>
			<section css={sectionStyle}>
				<CategoryTab searchParams={searchParams} onTabClick={handleCategoryTabClick} />
				<div css={toggleStyle}>
					<p>보유 카드 모아보기</p>
					<Toggle isToggle={isToggle} handleTogglePrev={handleToggleClick} />
				</div>
				<ul css={cardSectionStyle}>
					{starCard.list.map((card) => (
						<StarCard
							key={card.constellationId}
							id={card.constellationId}
							title={card.name}
							subTitle={card.typeName}
							starNumber={card.starCount}
							image={card.image}
							state={card.status}
						/>
					))}
				</ul>
			</section>
		</>
	);
};

export default StarCardPage;

const sectionStyle = css`
	width: 22.5rem;
	padding: 4.75rem 1.5rem 2.5rem 1.5rem;
	margin: 0 auto;
`;

const toggleStyle = css`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 12px;
	margin: 1.25rem 0;
	${theme.font.body_b_bold}
`;

const cardSectionStyle = css`
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
`;
