import { useEffect } from "react";

import { css } from "@emotion/react";

import Header from "@/components/common/Header/Header";
import CategoryTab from "@/components/StarPage/StarCard/CategoryTab";
import StarCard from "@/components/StarPage/StarCard/StarCard";
import Toggle from "@/components/StarPage/StarCard/Toggle";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getStarCard } from "@/api/star/starThunk";

const StarCardPage = () => {
	const dispatch = useAppDispatch();
	const { starCard } = useAppSelector((state) => state.star);

	useEffect(() => {
		dispatch(getStarCard({ id: "", isRegistered: false }));
	}, []);

	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.Title>별자리 카드</Header.Title>
			</Header>
			<section css={sectionStyle}>
				<CategoryTab />
				<Toggle />
				<ul css={cardSectionStyle}>
					{starCard.list.map((card) => (
						<StarCard
							key={card.constellationId}
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

const cardSectionStyle = css`
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
`;
