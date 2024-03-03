import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import ProfileButtonIcon from "@/assets/icon/ic-homepage-to-mypage.svg?react";

import { theme } from "@/styles/theme";

import { profileStyle } from "@/components/homepages/Profile.style";

function Profile() {
	const navigate = useNavigate();
	return (
		<section css={profileStyle.container}>
			<div
				css={profileStyle.imageWrapper}
				onClick={() => {
					navigate("/myinfo");
				}}
			>
				<img src="" alt="" />
			</div>
			<div
				css={profileStyle.names}
				onClick={() => {
					navigate("/myinfo");
				}}
			>
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
			<div
				css={profileStyle.buttonWrapper}
				onClick={() => {
					navigate("/generatehabit");
				}}
			>
				<ProfileButtonIcon />
			</div>
		</section>
	);
}

export default Profile;
