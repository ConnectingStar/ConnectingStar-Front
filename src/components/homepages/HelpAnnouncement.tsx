import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import HelpAnnouncementIcon from "@/assets/icon/ic-homepage-help-anouncement.svg?react";

import { helpAnnouncementStyle } from "@/components/homepages/HelpAnnouncement.style";

function HelpAnnouncement() {
	const navigate = useNavigate();
	return (
		<section
			css={helpAnnouncementStyle.container}
			onClick={() => {
				navigate("/help");
			}}
		>
			<div css={helpAnnouncementStyle.iconWrapper}>
				<HelpAnnouncementIcon
					css={css`
						width: 100%;
						height: 100%;
					`}
				/>
			</div>
			<div css={helpAnnouncementStyle.lineWrapper}>습관 도움말</div>
		</section>
	);
}

export default HelpAnnouncement;
