import RightArrowIcon from "@/assets/icon/ic-right-arrow.svg?react";
import Button from "@/components/MyPage/Button/Button";
import { buttonData, buttonDataWithIcon } from "@/constants/myPageConstants";

import {
	layoutStyle,
	headingStyle,
	profileBoxStyle,
	profileImgStyle,
	buttonBoxStyle,
} from "@/components/MyPage/Landing/Landing.style";

const Landing = () => {
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
						<Button key={buttonData.text} icon={buttonData.icon} text={buttonData.text} />
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
							subText={buttonData.subText}
							hasArrowIcon
							isSubText={true}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default Landing;
