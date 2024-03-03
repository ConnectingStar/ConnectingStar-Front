import { ReactNode } from "react";

import { css } from "@emotion/react";

import ProfileButtonIcon from "@/assets/icon/ic-homepage-to-mypage.svg?react";

import { theme } from "@/styles/theme";

import { ProfileStyle } from "./Profile.style";

function Profile(): ReactNode {
	return (
		<section css={ProfileStyle.container}>
			<div css={ProfileStyle.imageWrapper}></div>
			<div css={ProfileStyle.names}>
				<span
					css={css`
						${theme.font.head_c};
						color: ${theme.color.main_Blue};
					`}
				>
					매일 성장하는
				</span>
				<span
					css={css`
						${theme.font.head_a}
					`}
				>
					사용자닉네임
				</span>
			</div>
			<div css={ProfileStyle.buttonWrapper}>
				<ProfileButtonIcon
					css={css`
						width: 75%;
						height: 75%;
					`}
				/>
			</div>
		</section>
	);
}

export default Profile;
