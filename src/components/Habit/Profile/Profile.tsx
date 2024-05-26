import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ProfileButtonIcon from "@/assets/icon/ic-homepage-to-mypage.svg?react";
import StarImage from "@/assets/image/img-card-detail-star-button.png";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getUserInfo } from "@/api/user/userThunk";

import { PATH } from "@/constants/path";

import {
	layoutStyle,
	profileBoxStyle,
	identityTextStyle,
	nicknameTextStyle,
} from "@/components/Habit/Profile/Profile.style";

function Profile() {
	const dispatch = useAppDispatch();

	const { userData } = useAppSelector((state) => state.user);

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getUserInfo());
	}, []);

	return (
		<div css={layoutStyle}>
			<div css={profileBoxStyle} onClick={() => navigate(PATH.MY)}>
				<img src={StarImage} alt="user 프로필 이미지" />
				<div>
					<p css={identityTextStyle}>{userData.identity}</p>
					<p css={nicknameTextStyle}>{userData.nickname}</p>
				</div>
			</div>
			<ProfileButtonIcon onClick={() => navigate(PATH.CREATE_HABIT)} />
		</div>
	);
}

export default Profile;
