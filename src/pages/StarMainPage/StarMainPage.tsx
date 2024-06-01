import { useEffect } from "react";

import Gnb from "@/components/common/Gnb/Gnb";
// import CharacterUnlockModal from "@/components/StarPage/Modal/CharacterUnlockModal";
import StarBackground from "@/components/StarPage/StarMain/StarBackground";
import StarButton from "@/components/StarPage/StarMain/StarButton";
import StarCardLink from "@/components/StarPage/StarMain/StarCardLink";
import StarCharacter from "@/components/StarPage/StarMain/StarCharacter";
import StarInfo from "@/components/StarPage/StarMain/StarInfo";

import { axiosInstance } from "@/api/axiosInstance";
// import { useAppDispatch, useAppSelector } from "@/api/hooks";
// import { openModal } from "@/api/modal/modalSlice";

// import { modalType } from "@/constants/modalConstants";

import { containerStyle, starMainPageGnbStyle } from "@/pages/StarMainPage/StarMainPage.style";

export default function StarMainPage() {
	// const dispatch = useAppDispatch();

	// const { modal } = useAppSelector((state) => state.modal);

	// TODO: 테스트용 코드 (추후 별자리 메인 브랜치에서 수정 예정)
	useEffect(() => {
		// 현재 남은 별 개수 확인하는 API - 콘솔에서 확인 가능
		axiosInstance.get("/user/star").then((data) => console.log(data.data.data.star));
		// 현재 별자리 확인 API
		axiosInstance.get("/constellation/main").then((data) => console.log(data.data.data));
	}, []);

	// TODO: 테스트용 코드 (추후 별자리 메인 브랜치에서 수정 예정)
	const handleButtonClick = () => {
		// 별 채우는 API
		axiosInstance
			.put("/user/constellation/star")
			.then((data) => {
				console.log(data.data.data.isRegistered);
			})
			.catch((error) => console.error(error));
	};

	return (
		<div css={containerStyle}>
			<StarBackground />

			<StarInfo starCount={114} starCardId={1} />
			<StarCharacter svgData={data} />
			<div className="wrapper">
				<StarButton onClick={handleButtonClick} />
				<StarCardLink />
			</div>

			<div css={starMainPageGnbStyle}>
				<Gnb />
			</div>

			{/* {modal === modalType.CHARACTER_UNLOCK && <CharacterUnlockModal />} */}
		</div>
	);
}

// TODO: 테스트를 위한 임시 데이터(추후 삭제 예정)
export const data = {
	fill: "#0176F9",
	stroke: "#fff",
	strokeWidth: 2,
	opacity: 0.6,
	width: 312,
	height: 330,
	viewBox: "-7.5 -12 317 330",
	path: "M98 7.6748L153 160.175L296.5 77.6748 M4.5 190.675L153 160.175L163 198.175L150.5 302.675 M163 198.675L267.5 279.675",
	circleList: [
		{
			id: 1,
			cx: 98,
			cy: 7.17,
			r: 6,
			filled: false,
		},
		{
			id: 2,
			cx: 153,
			cy: 160.18,
			r: 6,
			filled: false,
		},
		{
			id: 3,
			cx: 163,
			cy: 198.18,
			r: 6,
			filled: false,
		},
		{
			id: 4,
			cx: 296.5,
			cy: 77.67,
			r: 3.5,
			filled: false,
		},
		{
			id: 5,
			cx: 267.5,
			cy: 279.68,
			r: 3.5,
			filled: false,
		},
		{
			id: 6,
			cx: 150.5,
			cy: 302.68,
			r: 3.5,
			filled: false,
		},
		{
			id: 7,
			cx: 4.5,
			cy: 190.68,
			r: 3.5,
			filled: false,
		},
	],
};
