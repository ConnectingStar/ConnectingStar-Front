import { Link } from "react-router-dom";

import RightArrowIcon from "@/assets/icon/ic-right-arrow.svg?react";

import MenuButton from "@/components/common/Button/MenuButton/MenuButton";

import { MENU_BUTTON_DATA, PROFILE_BUTTON_DATA } from "@/constants/myPageConstants";

import {
	layoutStyle,
	profileBoxStyle,
	profileImgStyle,
	buttonBoxStyle,
	buttonInnerBoxStyle,
} from "@/components/MyPage/Landing/Landing.style";

const Landing = () => {
	const isLatestVersion = true;

	return (
		<div css={layoutStyle}>
			<div css={profileBoxStyle}>
				<div css={profileImgStyle} />
				<Link to="/myinfo">
					<p>사용자 닉네임</p>
					<RightArrowIcon />
				</Link>
			</div>

			<div css={buttonBoxStyle}>
				{PROFILE_BUTTON_DATA.map((buttonData) => (
					<div css={buttonInnerBoxStyle} key={buttonData.id}>
						<h3>{buttonData.id}</h3>

						{buttonData.buttonList.map((buttonData) => (
							<MenuButton
								key={buttonData.title}
								icon={buttonData.icon}
								title={buttonData.title}
								link={buttonData.link}
							/>
						))}
					</div>
				))}

				{MENU_BUTTON_DATA.map((buttonData) => (
					<div css={buttonInnerBoxStyle} key={buttonData.id}>
						<h3>{buttonData.id}</h3>

						{buttonData.buttonList.map((buttonData) => (
							<MenuButton
								key={buttonData.title}
								title={buttonData.title}
								link={buttonData.link}
								hasArrowIcon={buttonData.title !== "현재 버전"}
								isLatestVersion={buttonData.title === "현재 버전" && isLatestVersion}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Landing;
