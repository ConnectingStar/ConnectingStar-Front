import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import RightArrowIcon from "@/assets/icon/ic-right-arrow.svg?react";

import MenuButton from "@/components/common/Button/MenuButton/MenuButton";
import LogoutModal from "@/components/MyPage/Modal/LogoutModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";
import { getOnlyUserInfo } from "@/api/user/userThunk";

import { modalType } from "@/constants/modalConstants";
import { MENU_BUTTON_DATA, PROFILE_BUTTON_DATA } from "@/constants/mypage";
import { PATH } from "@/constants/path";

import {
	layoutStyle,
	profileBoxStyle,
	profileImgStyle,
	profileTextBoxStyle,
	buttonBoxStyle,
	buttonInnerBoxStyle,
	dividerStyle,
	logoutButtonStyle,
} from "@/components/MyPage/Landing/Landing.style";

const Landing = () => {
	const dispatch = useAppDispatch();

	const { userInfo } = useAppSelector((state) => state.user);
	const { modal } = useAppSelector((state) => state.modal);

	const navigate = useNavigate();

	const isLatestVersion = true;

	useEffect(() => {
		dispatch(getOnlyUserInfo());
	}, []);

	if (!userInfo) {
		return <div />;
	}

	return (
		<div css={layoutStyle}>
			<div css={profileBoxStyle} onClick={() => navigate(PATH.MY_INFO)}>
				<div css={profileImgStyle} />
				<div css={profileTextBoxStyle}>
					<p>{userInfo.nickname}</p>
					<RightArrowIcon />
				</div>
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

			<div css={dividerStyle} />

			<button onClick={() => dispatch(openModal(modalType.LOGOUT))} css={logoutButtonStyle}>
				로그아웃
			</button>

			{modal === modalType.LOGOUT && <LogoutModal />}
		</div>
	);
};

export default Landing;
