import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import MenuButton from "@/components/common/Button/MenuButton/MenuButton";
import ChangeNicknameModal from "@/components/common/Modal/CommonModal/ChangeNicknameModal";
import SelectAgeModal from "@/components/common/Modal/CommonModal/SelectAgeModal";
import SelectGenderModal from "@/components/common/Modal/CommonModal/SelectGenderModal/SelectGenderModal";
import LogoutModal from "@/components/MyPage/Modal/LogoutModal";
import SelectCharacterModal from "@/components/MyPage/Modal/SelectCharacterModal/SelectCharacterModal";
import SelectIdentityModal from "@/components/MyPage/Modal/SelectIdentityModal/SelectIdentityModal";

import { withdrawal } from "@/api/auth/authThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";
import { getUserConstellationList, getUserInfo, getUserInfoWithHabit } from "@/api/user/userThunk";

import { modalType } from "@/constants/modalConstants";
import { MY_INFO_BUTTON_DATA } from "@/constants/mypage";

import {
	layoutStyle,
	characterBoxStyle,
	buttonBoxStyle,
	dividerStyle,
	authButtonBoxStyle,
	mainBoxStyle,
} from "@/components/MyPage/MyInfo/MyInfo.style";

const MyInfo = () => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);
	const { constellation } = useAppSelector((state) => state.user);

	console.log(constellation);

	// const navigate = useNavigate();

	const [gender, setGender] = useState("");
	const [identity, setIdentity] = useState("");
	const [nickname, setNickname] = useState("");
	const [ageRangeType, setAge] = useState("");
	const [socialType] = useState("카카오톡");

	const handleSubTextProp = (text: string) => {
		if (text === "정체성") {
			return identity;
		} else if (text === "닉네임") {
			return nickname;
		} else if (text === "성별") {
			return gender;
		} else if (text === "나이대") {
			return ageRangeType;
		} else if (text === "간편로그인") {
			return socialType;
		}
	};

	useEffect(() => {
		dispatch(getUserConstellationList());
		dispatch(getUserInfo());
		dispatch(getUserInfoWithHabit());
	}, []);

	return (
		<div css={layoutStyle}>
			<div css={mainBoxStyle}>
				<div css={characterBoxStyle}>
					<button onClick={() => dispatch(openModal(modalType.SELECT_CHARACTER))}>
						<p>이미지 변경</p>
					</button>
				</div>

				{MY_INFO_BUTTON_DATA.map((buttonData) => (
					<div key={buttonData.id} css={buttonBoxStyle}>
						<h3>{buttonData.id}</h3>
						{buttonData.button.map((buttonData) => (
							<MenuButton
								key={buttonData.title}
								title={buttonData.title}
								content={handleSubTextProp(buttonData.title)}
								onClick={() => dispatch(openModal(buttonData.modalName))}
							/>
						))}
					</div>
				))}
			</div>

			<div css={dividerStyle} />

			<div css={authButtonBoxStyle}>
				<button onClick={() => dispatch(openModal(modalType.LOGOUT))}>로그아웃</button>
				{/* <button onClick={() => navigate("/withdrawal")}>회원탈퇴</button> */}
				<button onClick={() => dispatch(withdrawal())}>회원탈퇴</button>
			</div>

			{modal === modalType.SELECT_CHARACTER && <SelectCharacterModal />}
			{modal === modalType.SELECT_GENDERTYPE && <SelectGenderModal changeGender={setGender} />}
			{modal === modalType.CHANGE_NICKNAME && <ChangeNicknameModal changeNickname={setNickname} />}
			{modal === modalType.SELECT_AGERANGETYPE && <SelectAgeModal changeAge={setAge} />}
			{modal === modalType.SELECT_IDENTITY && <SelectIdentityModal changeIdentity={setIdentity} />}
			{modal === modalType.LOGOUT && <LogoutModal />}
		</div>
	);
};

export default MyInfo;
