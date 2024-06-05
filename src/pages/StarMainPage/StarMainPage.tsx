import { useEffect } from "react";

import Gnb from "@/components/common/Gnb/Gnb";
import CharacterUnlockModal from "@/components/StarPage/Modal/CharacterUnlockModal";
import SelectStarButton from "@/components/StarPage/StarMain/SelectStarButton";
import StarBackground from "@/components/StarPage/StarMain/StarBackground";
import StarButton from "@/components/StarPage/StarMain/StarButton";
import StarCardLink from "@/components/StarPage/StarMain/StarCardLink";
import StarCharacter from "@/components/StarPage/StarMain/StarCharacter";
import StarInfo from "@/components/StarPage/StarMain/StarInfo";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal, closeModal } from "@/api/modal/modalSlice";
import { getStarMain, addStarToConstellation } from "@/api/star/starThunk";

import { modalType } from "@/constants/modalConstants";

import { containerStyle, starMainPageGnbStyle } from "@/pages/StarMainPage/StarMainPage.style";

export default function StarMainPage() {
	const dispatch = useAppDispatch();
	const { starMain } = useAppSelector((state) => state.star);
	const { isRegistered } = useAppSelector((state) => state.star);
	const { modal } = useAppSelector((state) => state.modal);

	useEffect(() => {
		dispatch(getStarMain());
	}, []);

	useEffect(() => {
		if (isRegistered) {
			dispatch(openModal(modalType.CHARACTER_UNLOCK));
		} else {
			dispatch(closeModal());
		}
	}, [isRegistered]);

	const handleButtonClick = () => {
		dispatch(addStarToConstellation());
	};

	return (
		<div css={containerStyle}>
			<StarBackground />
			<StarInfo
				isProgress={starMain.isProgress}
				starCount={starMain.starCount}
				starName={starMain.name}
				starCardId={starMain.constellationId}
			/>
			{starMain.isProgress ? <StarCharacter svgData={starMain.svg} /> : <SelectStarButton />}
			<div className="wrapper">
				{starMain.isProgress && (
					<StarButton onClick={handleButtonClick} disabled={starMain.starCount <= 0} />
				)}
				<StarCardLink />
			</div>

			<div css={starMainPageGnbStyle}>
				<Gnb />
			</div>

			{modal === modalType.CHARACTER_UNLOCK && (
				<CharacterUnlockModal id={starMain.constellationId} name={starMain.name} />
			)}
		</div>
	);
}
