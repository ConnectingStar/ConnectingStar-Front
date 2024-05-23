import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MenuButton from "@/components/common/Button/MenuButton/MenuButton";
import ChangeNicknameModal from "@/components/common/Modal/CommonModal/ChangeNicknameModal";
import SelectAgeModal from "@/components/common/Modal/CommonModal/SelectAgeModal";
import SelectGenderModal from "@/components/common/Modal/CommonModal/SelectGenderModal/SelectGenderModal";
import LogoutModal from "@/components/MyPage/Modal/LogoutModal";
import SelectCharacterModal from "@/components/MyPage/Modal/SelectCharacterModal/SelectCharacterModal";
import SelectIdentityModal from "@/components/MyPage/Modal/SelectIdentityModal/SelectIdentityModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";
import { getUserConstellationList, getUserInfo } from "@/api/user/userThunk";

import { modalType } from "@/constants/modalConstants";

import { generateGenderType, generateAgeType } from "@/utils/generateRangeType";

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
	const { constellation, userData } = useAppSelector((state) => state.user);

	console.log(constellation);
	console.log(userData);

	const navigate = useNavigate();

	const [, setGender] = useState("");
	const [, setIdentity] = useState("");
	const [, setNickname] = useState("");
	const [, setAge] = useState("");

	useEffect(() => {
		dispatch(getUserConstellationList());
		dispatch(getUserInfo());
	}, []);

	return (
		<div css={layoutStyle}>
			<div css={mainBoxStyle}>
				<div css={characterBoxStyle}>
					<button onClick={() => dispatch(openModal(modalType.SELECT_CHARACTER))}>
						<p>이미지 변경</p>
					</button>
				</div>

				<div css={buttonBoxStyle}>
					<h3>내 정보</h3>
					<MenuButton
						title="대표 정체성"
						content={userData.identity}
						onClick={() => dispatch(openModal(modalType.SELECT_IDENTITY))}
					/>
					<MenuButton
						title="닉네임"
						content={userData.nickname}
						onClick={() => dispatch(openModal(modalType.CHANGE_NICKNAME))}
					/>
					<MenuButton
						title="성별"
						content={generateGenderType(userData.genderType)}
						onClick={() => dispatch(openModal(modalType.SELECT_GENDERTYPE))}
					/>
					<MenuButton
						title="나이대"
						content={generateAgeType(userData.ageRangeType)}
						onClick={() => dispatch(openModal(modalType.SELECT_AGERANGETYPE))}
					/>
				</div>

				<div css={buttonBoxStyle}>
					<h3>로그인 계정</h3>
					<MenuButton title="간편로그인" content="카카오톡" />
				</div>
			</div>

			<div css={dividerStyle} />

			<div css={authButtonBoxStyle}>
				<button onClick={() => dispatch(openModal(modalType.LOGOUT))}>로그아웃</button>
				<button onClick={() => navigate("/withdrawal")}>회원탈퇴</button>
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
