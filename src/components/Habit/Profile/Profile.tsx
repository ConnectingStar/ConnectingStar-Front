import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ProfileButtonIcon from "@/assets/icon/ic-homepage-to-mypage.svg?react";
import StarImage from "@/assets/image/img-card-detail-star-button.png";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getOnlyUserInfo } from "@/api/user/userThunk";

import { PATH } from "@/constants/path";

import {
	layoutStyle,
	profileBoxStyle,
	identityTextStyle,
	nicknameTextStyle,
} from "@/components/Habit/Profile/Profile.style";

function Profile() {
	const dispatch = useAppDispatch();

	const { userInfo } = useAppSelector((state) => state.user);

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getOnlyUserInfo());
	}, []);

	if (!userInfo) {
		return <div />;
	}

	return (
		<div css={layoutStyle}>
			<div css={profileBoxStyle} onClick={() => navigate(PATH.MY)}>
				<img src={StarImage} alt="user 프로필 이미지" />
				<div>
					<p css={identityTextStyle}>
						{userInfo.identity === "없음" ? "약속을 만들어 주세요" : userInfo.identity}
					</p>
					<p css={nicknameTextStyle}>{userInfo.nickname}</p>
				</div>
			</div>
			<ProfileButtonIcon onClick={() => navigate(PATH.CREATE_HABIT)} />
		</div>
	);
}

export default Profile;
