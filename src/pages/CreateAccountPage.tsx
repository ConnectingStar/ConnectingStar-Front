import { useState } from "react";

import ArrowDown from "@/assets/icon/arrow-down.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import ChangeNicknameModal from "@/components/common/Modal/CommonModal/ChangeNicknameModal";
import SelectAgeModal from "@/components/common/Modal/CommonModal/SelectAgeModal";
import SelectGenderModal from "@/components/common/Modal/CommonModal/SelectGenderModal/SelectGenderModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import { createAccountStyle } from "@/pages/CreateAccountPage.style";

const accountInputData = [
	{
		title: "닉네임",
		content: "닉네임을 입력해 주세요",
		isPopUpModal: false,
	},
	{
		title: "성별",
		content: "성별을 선택해 주세요",
		isPopUpModal: true,
	},
	{
		title: "나이대",
		content: "나이대를 선택해 주세요",
		isPopUpModal: true,
	},
];

export default function CreateAccountPage() {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const [nickName, setNickName] = useState<string>("");
	const [gender, setGender] = useState<string>("");
	const [age, setAge] = useState<string>("");

	return (
		<>
			<Header>
				<Header.PrevButton></Header.PrevButton>
			</Header>
			<div css={createAccountStyle.container}>
				<h1>내 정보 입력을 완료해 주세요</h1>
				<ul css={createAccountStyle.wrap}>
					{accountInputData.map((item, index) => {
						return (
							<li key={item.title}>
								<h2>{item.title}</h2>
								<div
									onClick={() => {
										index === 0 && dispatch(openModal(modalType.CHANGE_NICKNAME));
										index === 1 && dispatch(openModal(modalType.SELECT_GENDER));
										index === 2 && dispatch(openModal(modalType.SELECT_AGE));
									}}
								>
									{index === 0 && (nickName ? nickName : item.content)}
									{index === 1 && (gender ? gender : item.content)}
									{index === 2 && (age ? age : item.content)}
									{item.isPopUpModal && <ArrowDown />}
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<FooterBtn text="다음" />

			{modal === modalType.CHANGE_NICKNAME && <ChangeNicknameModal changeNickname={setNickName} />}
			{modal === modalType.SELECT_GENDER && <SelectGenderModal changeGender={setGender} />}
			{modal === modalType.SELECT_AGE && <SelectAgeModal changeAge={setAge} />}
		</>
	);
}
