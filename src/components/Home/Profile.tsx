import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import ProfileButtonIcon from "@/assets/icon/ic-homepage-to-mypage.svg?react";

import { theme } from "@/styles/theme";

import { profileStyle } from "@/components/Home/Profile.style";

function Profile() {
	const navigate = useNavigate();
	return (
		<section css={profileStyle.container}>
			<div style={{ display: "flex" }} onClick={() => navigate("/mypage")}>
				<div css={profileStyle.imageWrapper}>
					<img src="" alt="" />
				</div>
				<div css={profileStyle.names}>
					<span
						css={css`
							${theme.font.body_c};
							color: ${theme.color.main_blue};
						`}
					>
						매일 성장하는
					</span>
					<span
						css={css`
							${theme.font.head_c}
						`}
					>
						사용자닉네임
					</span>
				</div>
			</div>
			<div css={profileStyle.buttonWrapper} onClick={() => navigate("/generatehabit")}>
				<ProfileButtonIcon />
			</div>
		</section>
	);
}

export default Profile;
