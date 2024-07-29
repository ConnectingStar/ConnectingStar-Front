import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MenuButton from "@/components/common/Button/MenuButton/MenuButton";
import Header from "@/components/common/Header/Header";
import ChangeNicknameModal from "@/components/common/Modal/CommonModal/ChangeNicknameModal";
import SelectAgeRangeModal from "@/components/common/Modal/CommonModal/SelectAgeRangeModal";
import SelectGenderModal from "@/components/common/Modal/CommonModal/SelectGenderModal/SelectGenderModal";
import LogoutModal from "@/components/MyPage/Modal/LogoutModal";
import SelectCharacterModal from "@/components/MyPage/Modal/SelectCharacterModal/SelectCharacterModal";
import SelectIdentityModal from "@/components/MyPage/Modal/SelectIdentityModal/SelectIdentityModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";
import { getUserConstellationListV2, getUserInfo, getUserInfoV2 } from "@/api/user/userThunk";

import { modalType } from "@/constants/modalConstants";

import { generateGenderType, generateAgeType } from "@/utils/generateRangeType";

import {
	layoutStyle,
	characterBoxStyle,
	buttonBoxStyle,
	dividerStyle,
	authButtonBoxStyle,
	mainBoxStyle,
} from "@/pages/MyInfoPage/MyInfoPage.style";

const MyInfoPage = () => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);
	const { constellationList, userInfo } = useAppSelector((state) => state.user);

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			getUserConstellationListV2({
				constellationTypeId: "",
				isRegistered: true,
				related: "constellation",
			}),
		);
		dispatch(getUserInfo());
		dispatch(getUserInfoV2());
	}, []);

	if (!userInfo) {
		return <div />;
	}

	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.Title>내 정보</Header.Title>
			</Header>
			<div css={layoutStyle}>
				<div css={mainBoxStyle}>
					<div css={characterBoxStyle}>
						<img
							src={
								userInfo.constellation === null
									? userInfo.defaultCharacterImage
									: userInfo.constellation.characterImage
							}
							alt="characterImage"
						/>
						<button onClick={() => dispatch(openModal(modalType.SELECT_CHARACTER))}>
							<p>이미지 변경</p>
						</button>
					</div>

					<div css={buttonBoxStyle}>
						<h3>내 정보</h3>
						<MenuButton
							title="대표 정체성"
							content={userInfo.identity === "없음" ? "약속을 만들어 주세요" : userInfo.identity}
							onClick={() => dispatch(openModal(modalType.SELECT_MAIN_IDENTITY))}
						/>
						<MenuButton
							title="닉네임"
							content={userInfo.nickname}
							onClick={() => dispatch(openModal(modalType.CHANGE_NICKNAME))}
						/>
						<MenuButton
							title="성별"
							content={generateGenderType(userInfo.gender)}
							onClick={() => dispatch(openModal(modalType.SELECT_GENDERTYPE))}
						/>
						<MenuButton
							title="나이대"
							content={generateAgeType(userInfo.ageRange)}
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

				{modal === modalType.SELECT_CHARACTER && (
					<SelectCharacterModal
						prevConstellation={userInfo.constellation.constellationId}
						constellationList={constellationList}
					/>
				)}
				{modal === modalType.SELECT_GENDERTYPE && (
					<SelectGenderModal prevGender={generateGenderType(userInfo.gender)} />
				)}
				{modal === modalType.CHANGE_NICKNAME && (
					<ChangeNicknameModal prevNickname={userInfo.nickname} />
				)}
				{modal === modalType.SELECT_AGERANGETYPE && (
					<SelectAgeRangeModal prevAgeRange={generateAgeType(userInfo.ageRange)} />
				)}
				{modal === modalType.SELECT_MAIN_IDENTITY && (
					<SelectIdentityModal prevIdentity={userInfo.identity} />
				)}
				{modal === modalType.LOGOUT && <LogoutModal />}
			</div>
		</>
	);
};

export default MyInfoPage;
