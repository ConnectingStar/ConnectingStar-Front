import { useState } from "react";

import { css } from "@emotion/react";

import ArrowDownIcon from "@/assets/icon/ic-arrow-down.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";
import ChangeNicknameModal from "@/components/common/Modal/CommonModal/ChangeNicknameModal";
import SelectAgeModal from "@/components/common/Modal/CommonModal/SelectAgeModal";
import SelectGenderModal from "@/components/common/Modal/CommonModal/SelectGenderModal/SelectGenderModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";
import { updateBasicUserData } from "@/api/user/userSlice";

import { modalType } from "@/constants/modalConstants";

import { theme } from "@/styles/theme";

function CreateAccount({ onNext }: { onNext: () => void }) {
	const dispatch = useAppDispatch();
	const { modal } = useAppSelector((state) => state.modal);

	const [nickName, setNickName] = useState<string>("");
	const [gender, setGender] = useState<string>("");
	const [age, setAge] = useState<string>("");

	const accountInputData = [
		{
			state: nickName,
			title: "닉네임",
			content: "닉네임을 입력해 주세요",
			modalType: modalType.CHANGE_NICKNAME,
		},
		{
			state: gender,
			title: "성별",
			content: "성별을 선택해 주세요",
			modalType: modalType.SELECT_GENDER,
		},
		{
			state: age,
			title: "나이대",
			content: "나이대를 선택해 주세요",
			modalType: modalType.SELECT_AGE,
		},
	];

	const confirmBasicUserData = () => {
		dispatch(updateBasicUserData({ nickName, gender, age }));
		onNext();
	};

	return (
		<>
			<Header>
				<Header.PrevButton />
			</Header>

			<div css={container}>
				<h1>내 정보 입력을 완료해 주세요</h1>
				<ul css={wrap}>
					{accountInputData.map((item) => (
						<li key={item.title}>
							<h2>{item.title}</h2>
							<div
								style={{ color: item.state && "black" }}
								onClick={() => {
									dispatch(openModal(item.modalType));
								}}
							>
								{item.state === "" ? item.content : item.state}
								{item.title !== "닉네임" && <ArrowDownIcon />}
							</div>
						</li>
					))}
				</ul>
			</div>

			<FooterBtn
				text="다음"
				isTransparent
				disabled={!nickName || !gender || !age}
				handleBtnClick={confirmBasicUserData}
			/>

			{modal === modalType.CHANGE_NICKNAME && <ChangeNicknameModal changeNickname={setNickName} />}
			{modal === modalType.SELECT_GENDER && <SelectGenderModal changeGender={setGender} />}
			{modal === modalType.SELECT_AGE && <SelectAgeModal changeAge={setAge} />}
		</>
	);
}

export default CreateAccount;

const container = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.25rem 1.5rem;

	& > h1 {
		${theme.font.head_a}
		margin-bottom: 2.5rem;
	}
`;

const wrap = css`
	& > li {
		margin-bottom: 1.25rem;
		& > h2 {
			${theme.font.head_c}
			color: ${theme.color.font_gray};
			margin-bottom: 0.75rem;
		}
		& > div {
			display: flex;
			justify-content: space-between;
			height: 3.438rem;
			background-color: ${theme.color.bg};
			color: ${theme.color.button_deactivated};
			align-items: center;
			${theme.font.body_a};
			border-radius: 15px;
			padding: 1rem;
		}
	}
`;
