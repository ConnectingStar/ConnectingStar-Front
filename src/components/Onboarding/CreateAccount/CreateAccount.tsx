import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import ChangeNicknameModal from "@/components/common/Modal/CommonModal/ChangeNicknameModal";
import SelectAgeRangeModal from "@/components/common/Modal/CommonModal/SelectAgeRangeModal";
import SelectGenderModal from "@/components/common/Modal/CommonModal/SelectGenderModal/SelectGenderModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import type { OnboardingUserInfoType } from "@/types/userDataType";

import {
	layoutStyle,
	boxStyle,
	inputBoxStyle,
} from "@/components/Onboarding/CreateAccount/CreateAccount.style";

export interface OnboardingProps {
	userInfoRequest: OnboardingUserInfoType;
	updateInputValue?: <Key extends keyof OnboardingUserInfoType>(
		key: Key,
		value: OnboardingUserInfoType[Key],
	) => void;
	onNext: () => void;
}

const CreateAccount = ({ userInfoRequest, updateInputValue, onNext }: OnboardingProps) => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	return (
		<>
			<div css={layoutStyle}>
				<h1>내 정보 입력을 완료해 주세요</h1>
				<div css={boxStyle}>
					<div css={inputBoxStyle(userInfoRequest.nickname !== "닉네임을 입력해 주세요")}>
						<h2>닉네임</h2>
						<div onClick={() => dispatch(openModal(modalType.CHANGE_NICKNAME))}>
							<span>{userInfoRequest.nickname}</span>
						</div>
					</div>

					<div css={inputBoxStyle(userInfoRequest.genderType !== "성별을 선택해 주세요")}>
						<h2>성별</h2>
						<div onClick={() => dispatch(openModal(modalType.SELECT_GENDERTYPE))}>
							<span>{userInfoRequest.genderType}</span>
							<DownArrowIcon />
						</div>
					</div>

					<div css={inputBoxStyle(userInfoRequest.ageRangeType !== "나이대를 선택해 주세요")}>
						<h2>나이대</h2>
						<div onClick={() => dispatch(openModal(modalType.SELECT_AGERANGETYPE))}>
							<span>{userInfoRequest.ageRangeType}</span>
							<DownArrowIcon />
						</div>
					</div>
				</div>
			</div>

			<FooterBtn
				text="다음"
				isTransparent
				disabled={
					userInfoRequest.nickname === "닉네임을 입력해 주세요" ||
					userInfoRequest.genderType === "성별을 선택해 주세요" ||
					userInfoRequest.ageRangeType === "나이대를 선택해 주세요"
				}
				handleBtnClick={onNext}
			/>

			{modal === modalType.CHANGE_NICKNAME && (
				<ChangeNicknameModal
					prevNickname={userInfoRequest.nickname}
					updateInputValue={updateInputValue}
				/>
			)}
			{modal === modalType.SELECT_GENDERTYPE && (
				<SelectGenderModal
					prevGender={userInfoRequest.genderType}
					updateInputValue={updateInputValue}
				/>
			)}
			{modal === modalType.SELECT_AGERANGETYPE && (
				<SelectAgeRangeModal
					prevAgeRange={userInfoRequest.ageRangeType}
					updateInputValue={updateInputValue}
				/>
			)}
		</>
	);
};

export default CreateAccount;
