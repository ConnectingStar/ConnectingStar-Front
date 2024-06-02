import { useState, useEffect } from "react";

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

	const [isToggleActive, setIsToggleActive] = useState(false);
	const [select, setSelect] = useState({ id: 0, title: "전체" });

	useEffect(() => {
		dispatch(
			getStarCard({
				id: `${select.id === 0 ? "" : String(select.id)}`,
				isRegistered: isToggleActive,
			}),
		);
	}, [select, isToggleActive]);

	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.Title>별자리 카드</Header.Title>
			</Header>
			<section css={sectionStyle}>
				<CategoryTab
					select={select}
					onSelect={(id: number, item: string) => setSelect({ id, title: item })}
				/>
				<Toggle
					isToggleActive={isToggleActive}
					onToggle={() => setIsToggleActive(!isToggleActive)}
				/>
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

const cardSectionStyle = css`
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
`;
