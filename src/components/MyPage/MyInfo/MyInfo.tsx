import Button from "@/components/MyPage/Button/Button";
import CharacterSelectModal from "@/components/MyPage/MyInfo/CharacterSelectModal/CharacterSelectModal";

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

	return (
		<div css={layoutStyle}>
			<div css={mainBoxStyle}>
				<div css={characterBoxStyle}>
					<button onClick={() => dispatch(openModal(modalType.CHARACTER_SELECT))}>
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
								subText={buttonData.subText}
								isSubText
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
			{modal === modalType.CHARACTER_SELECT && <CharacterSelectModal />}
		</div>
	);
};

export default MyInfo;
