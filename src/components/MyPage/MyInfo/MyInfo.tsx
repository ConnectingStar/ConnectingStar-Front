import { useState } from "react";

import Button from "@/components/MyPage/Button/Button";
import ChangeNicknameModal from "@/components/MyPage/MyInfo/ChangeNicknameModal/ChangeNicknameModal";
import SelectCharacterModal from "@/components/MyPage/MyInfo/SelectCharacterModal/SelectCharacterModal";
import SelectGenderModal from "@/components/MyPage/MyInfo/SelectGenderModal/SelectGenderModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";
import { myInfoButtonData } from "@/constants/myPageConstants";

import {
	layoutStyle,
	characterBoxStyle,
	buttonBoxStyle,
	dividerStyle,
	authListStyle,
	mainBoxStyle,
} from "@/components/MyPage/MyInfo/MyInfo.style";

const MyInfo = () => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const [gender, setGender] = useState("");
	const [identity] = useState("");
	const [nickname, setNickname] = useState("");
	const [age] = useState("");

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
					<button onClick={() => dispatch(openModal(modalType.SELECT_CHARACTER))}>
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

			<ul css={authListStyle}>
				<li>
					<p>로그아웃</p>
				</li>
				<li>
					<p>회원탈퇴</p>
				</li>
			</ul>
			{modal === modalType.SELECT_CHARACTER && <SelectCharacterModal />}
			{modal === modalType.SELECT_GENDER && <SelectGenderModal changeGender={setGender} />}
			{modal === modalType.CHANGE_NICKNAME && <ChangeNicknameModal changeNickname={setNickname} />}
		</div>
	);
};

export default MyInfo;
