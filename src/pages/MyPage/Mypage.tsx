import RightArrowIcon from "@/assets/icon/ic-right-arrow.svg?react";
import Button from "@/components/MyPage/Button";
import { buttonData, buttonDataWithIcon } from "@/constants/myPageConstants";

import {
	layoutStyle,
	headingStyle,
	profileBoxStyle,
	profileImgStyle,
	buttonBoxStyle,
} from "@/pages/MyPage/Mypage.style";

const Mypage = () => {
	return (
		<div css={layoutStyle}>
			<h2 css={headingStyle}>마이 페이지</h2>
			<div css={profileBoxStyle}>
				<div css={profileImgStyle} />
				<a href="#">
					<p>사용자 닉네임</p>
					<RightArrowIcon />
				</a>
			</div>

			{buttonDataWithIcon.map((data) => (
				<div css={buttonBoxStyle} key={data.id}>
					{data.id === "프로필" ? "" : <h3>{data.id}</h3>}
					{data.button.map((buttonData) => (
						<Button
							key={buttonData.text}
							icon={buttonData.icon}
							text={buttonData.text}
							hasArrowIcon={false}
							isVersion={false}
						/>
					))}
				</div>
			))}

			{buttonData.map((data) => (
				<div css={buttonBoxStyle} key={data.id}>
					{data.id === "프로필" ? "" : <h3>{data.id}</h3>}
					{data.button.map((buttonData) => (
						<Button
							key={buttonData.text}
							text={buttonData.text}
							hasArrowIcon={buttonData.text !== "현재 버전"}
							isVersion={buttonData.text === "현재 버전"}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default Mypage;
