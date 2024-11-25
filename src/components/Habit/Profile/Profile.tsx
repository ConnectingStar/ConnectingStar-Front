import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ProfileButtonIcon from "@/assets/icon/ic-homepage-to-mypage.svg?react";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getUserInfoV2 } from "@/api/user/userThunk";

import { PATH } from "@/constants/path";

import {
	layoutStyle,
	profileBoxStyle,
	identityTextStyle,
	nicknameTextStyle,
} from "@/components/Habit/Profile/Profile.style";

function Profile({ habitCount }: { habitCount: number }) {
	const dispatch = useAppDispatch();

	const { userProfile } = useAppSelector((state) => state.user);

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getUserInfoV2());
	}, []);

	if (!userProfile) {
		return <div />;
	}

	return (
		<div css={layoutStyle}>
			<div css={profileBoxStyle} onClick={() => navigate(PATH.MY)}>
				<img
					src={
						userProfile.user.profileConstellation === null
							? userProfile.defaultCharacterImage
							: userProfile.user.profileConstellation.characterImage
					}
					alt="user 프로필 이미지"
				/>
				<div>
					<p css={identityTextStyle}>
						{userProfile.user.identity === "없음"
							? "약속을 만들어 주세요"
							: userProfile.user.identity}
					</p>
					<p css={nicknameTextStyle}>{userProfile.user.nickname}</p>
				</div>
			</div>
			{habitCount < 3 && <ProfileButtonIcon onClick={() => navigate(PATH.CREATE_HABIT)} />}
		</div>
	);
}

export default Profile;
