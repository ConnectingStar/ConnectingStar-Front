import { useEffect } from "react";

import Gnb from "@/components/common/Gnb/Gnb";
// import CharacterUnlockModal from "@/components/StarPage/Modal/CharacterUnlockModal";
import StarBackground from "@/components/StarPage/StarMain/StarBackground";
import StarButton from "@/components/StarPage/StarMain/StarButton";
import StarCardLink from "@/components/StarPage/StarMain/StarCardLink";
import StarCharacter from "@/components/StarPage/StarMain/StarCharacter";
import StarInfo from "@/components/StarPage/StarMain/StarInfo";

import { axiosInstance } from "@/api/axiosInstance";
import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getStarMain } from "@/api/star/starThunk";
// import { openModal } from "@/api/modal/modalSlice";

// import { modalType } from "@/constants/modalConstants";

import { containerStyle, starMainPageGnbStyle } from "@/pages/StarMainPage/StarMainPage.style";

export default function StarMainPage() {
	const dispatch = useAppDispatch();
	const { starMain } = useAppSelector((state) => state.star);

	// const { modal } = useAppSelector((state) => state.modal);

	// TODO: 테스트용 코드 (추후 별자리 메인 브랜치에서 수정 예정)
	useEffect(() => {
		// 현재 남은 별 개수 확인하는 API - 콘솔에서 확인 가능
		axiosInstance.get("/user/star").then((data) => console.log(data.data.data.star));
		// 현재 별자리 확인 API
		dispatch(getStarMain());
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

			<StarInfo starCount={starMain.starCount} starName={starMain.name} starCardId={1} />
			<StarCharacter svgData={starMain.svg} />
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
