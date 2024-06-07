import { StarCardDetailStatus } from "@/types/star";

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

export function generateName(characterName: string, status: StarCardDetailStatus) {
	if (status === STAR_DETAIL_STATUS.COMPLETE) {
		return characterName;
	} else {
		return characterName + " 자리";
	}
}
