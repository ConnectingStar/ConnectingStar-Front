import { useNavigate } from "react-router-dom";

import ProfileButtonIcon from "@/assets/icon/ic-homepage-to-mypage.svg?react";
import StarImage from "@/assets/image/img-card-detail-star-button.png";

import { profileStyle } from "@/components/Home/Profile.style";

function Profile() {
	const navigate = useNavigate();
	return (
		<section css={profileStyle.container}>
			<div style={{ display: "flex" }} onClick={() => navigate("/mypage")}>
				<div css={profileStyle.imageWrapper}>
					<img src={StarImage} alt="임시" />
				</div>
				<div css={profileStyle.names}>
					<span className="identity">매일 성장하는</span>
					<span className="nickname">사용자닉네임</span>
				</div>
			</div>
			<div css={profileStyle.buttonWrapper} onClick={() => navigate("/habitgenerate")}>
				<ProfileButtonIcon />
			</div>
		</section>
	);
}

export default Profile;
