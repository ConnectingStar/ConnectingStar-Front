import { ReactNode } from "react";

import { css } from "@emotion/react";

import HelpAnnouncementIcon from "@/assets/icon/ic-homepage-help-anouncement.svg?react";

import { HelpAnnouncementStyle } from "./HelpAnnouncement.style";

function HelpAnnouncement(): ReactNode {
	return (
		<section
			css={css`
				${HelpAnnouncementStyle.container}
			`}
		>
			<div
				css={css`
					${HelpAnnouncementStyle.iconWrapper}
				`}
			>
				<HelpAnnouncementIcon
					css={css`
						width: 50%;
						height: 50%;
					`}
				/>
			</div>
			<div
				css={css`
					${HelpAnnouncementStyle.lineWrapper}
				`}
			>
				습관 도움말
			</div>
		</section>
	);
}

export default HelpAnnouncement;
