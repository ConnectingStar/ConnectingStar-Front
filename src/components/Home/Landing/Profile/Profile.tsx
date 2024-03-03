import { useNavigate } from "react-router-dom";

import ProfileButtonIcon from "@/assets/icon/ic-homepage-to-mypage.svg?react";
import StarImage from "@/assets/image/img-card-detail-star-button.png";

import {
	layoutStyle,
	profileBoxStyle,
	profileTextBoxStyle,
} from "@/components/Home/Landing/Profile/Profile.style";

function Profile() {
	const navigate = useNavigate();

	return (
		<section css={layoutStyle}>
			<div css={profileBoxStyle} onClick={() => navigate("/mypage")}>
				<img src={StarImage} alt="user 프로필 이미지" />
				<div css={profileTextBoxStyle}>
					<span>매일 성장하는</span>
					<span>사용자닉네임</span>
				</div>
			</div>
			<ProfileButtonIcon onClick={() => navigate("/habitgenerate")} />
		</section>
	);
}

export default Profile;
