import { StarCardDetailStatus, StarCardStatus, CategoryType, Circle } from "@/types/star";

import { STAR_DETAIL_STATUS } from "@/constants/starPageConstants";

export function generateStars() {
	const stars = [];
	const numberOfStars = 200;

	for (let i = 0; i < numberOfStars; i++) {
		const cx = Math.random() * window.innerWidth; // 별의 위치 랜덤 설정
		const cy = Math.random() * window.innerHeight; // 별의 위치 랜덤 설정
		const r = Math.random(); // 별의 반지름 랜덤 설정 (별의 크기)
		stars.push({
			id: i,
			cx,
			cy,
			r,
		});
	}

	return stars;
}

export function generateName(characterName: string, status: StarCardDetailStatus | StarCardStatus) {
	if (status === STAR_DETAIL_STATUS.COMPLETE) {
		return characterName;
	} else {
		return characterName + " 자리";
	}
}

export function findCategoryItem(category: CategoryType[], param: string | null) {
	return category.find((item) => item.param === param);
}

export function validateCategoryParams(category: CategoryType[], param: string | null) {
	return category.some((item) => item.param === param);
}

export function validateToggleParams(param: string | null) {
	if (param === null) return;
	return param === "true" || param === "false";
}

export function findCircleItem(arr: Circle[]) {
	const index = arr.findIndex((item) => item.filled === false);
	return {
		item: arr[index],
		index,
	};
}
