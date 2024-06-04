import { useEffect } from "react";
import { Link } from "react-router-dom";

import RightArrowIcon from "@/assets/icon/ic-right-arrow.svg?react";

import MenuButton from "@/components/common/Button/MenuButton/MenuButton";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getUserInfo } from "@/api/user/userThunk";

import { MENU_BUTTON_DATA, PROFILE_BUTTON_DATA } from "@/constants/mypage";

import {
	layoutStyle,
	profileBoxStyle,
	profileImgStyle,
	buttonBoxStyle,
	buttonInnerBoxStyle,
} from "@/components/MyPage/Landing/Landing.style";

const Landing = () => {
	const dispatch = useAppDispatch();

	const { userData } = useAppSelector((state) => state.user);

	const isLatestVersion = true;

	useEffect(() => {
		dispatch(getUserInfo());
	}, []);

	return (
		<div css={layoutStyle}>
			<div css={profileBoxStyle}>
				<div css={profileImgStyle} />
				<Link to="/myinfo">
					<p>{userData.nickname}</p>
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
