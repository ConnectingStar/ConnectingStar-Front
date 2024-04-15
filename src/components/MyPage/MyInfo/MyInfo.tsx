import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ChangeNicknameModal from "@/components/common/Modal/CommonModal/ChangeNicknameModal";
import SelectAgeModal from "@/components/common/Modal/CommonModal/SelectAgeModal";
import SelectGenderModal from "@/components/common/Modal/CommonModal/SelectGenderModal/SelectGenderModal";
import Button from "@/components/MyPage/Button/Button";
import LogoutModal from "@/components/MyPage/Modal/LogoutModal";
import SelectCharacterModal from "@/components/MyPage/Modal/SelectCharacterModal/SelectCharacterModal";
import SelectIdentityModal from "@/components/MyPage/Modal/SelectIdentityModal/SelectIdentityModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";
import { myInfoButtonData } from "@/constants/myPageConstants";

import { useToast } from "@/hooks/useToast";

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

	const { createToast } = useToast();

	const navigate = useNavigate();

	const [gender, setGender] = useState("");
	const [identity, setIdentity] = useState("");
	const [nickname, setNickname] = useState("");
	const [age, setAge] = useState("");

	const handleSubTextProp = (text: string) => {
		if (text === "정체성") {
			return identity;
		} else if (text === "닉네임") {
			return nickname;
		} else if (text === "성별") {
			return gender;
		} else if (text === "나이대") {
			return age;
		}
	};

	return (
		<div css={layoutStyle}>
			<div css={mainBoxStyle}>
				<div css={characterBoxStyle}>
					{/* <button onClick={() => dispatch(openModal(modalType.SELECT_CHARACTER))}>
						<p>캐릭터 변경</p>
					</button> */}
					<button onClick={() => createToast("테스트 토스트")}>
						<p>캐릭터 변경</p>
					</button>
				</div>

				{myInfoButtonData.map((data) => (
					<div key={data.id} css={buttonBoxStyle}>
						<h3>{data.id}</h3>
						{data.button.map((buttonData) => (
							<Button
								key={buttonData.text}
								text={buttonData.text}
								subText={handleSubTextProp(buttonData.text)}
								isSubText
								onClick={() => dispatch(openModal(buttonData.modalName))}
							/>
						))}
					</div>
				))}
			</div>

			<div css={dividerStyle} />

			<div css={authButtonBoxStyle}>
				<button onClick={() => dispatch(openModal(modalType.LOGOUT))}>로그아웃</button>
				<button onClick={() => navigate("/withdrawal")}>회원탈퇴</button>
			</div>

			{modal === modalType.SELECT_CHARACTER && <SelectCharacterModal />}
			{modal === modalType.SELECT_GENDER && <SelectGenderModal changeGender={setGender} />}
			{modal === modalType.CHANGE_NICKNAME && <ChangeNicknameModal changeNickname={setNickname} />}
			{modal === modalType.SELECT_AGE && <SelectAgeModal changeAge={setAge} />}
			{modal === modalType.SELECT_IDENTITY && <SelectIdentityModal changeIdentity={setIdentity} />}
			{modal === modalType.LOGOUT && <LogoutModal />}
		</div>
	);
};

export default MyInfo;
