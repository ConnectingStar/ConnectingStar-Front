import { Link } from "react-router-dom";

import RightArrowIcon from "@/assets/icon/ic-right-arrow.svg?react";

import Button from "@/components/MyPage/Button/Button";

import { buttonData, buttonDataWithIcon } from "@/constants/myPageConstants";

import {
	layoutStyle,
	profileBoxStyle,
	profileImgStyle,
	buttonBoxStyle,
} from "@/components/MyPage/Landing/Landing.style";

const Landing = () => {
	return (
		<div css={layoutStyle}>
			<div css={profileBoxStyle}>
				<div css={profileImgStyle} />
				<Link to="/myinfo">
					<p>사용자 닉네임</p>
					<RightArrowIcon />
				</Link>
			</div>

			{buttonDataWithIcon.map((data) => (
				<div css={buttonBoxStyle} key={data.id}>
					{data.id !== "프로필" && <h3>{data.id}</h3>}

					{data.button.map((buttonData) => (
						<Button
							key={buttonData.text}
							icon={buttonData.icon}
							text={buttonData.text}
							text2={buttonData.text2}
							link={buttonData.link}
						/>
					))}
				</div>
			))}

			{buttonData.map((data) => (
				<div css={buttonBoxStyle} key={data.id}>
					<h3>{data.id}</h3>

					{data.button.map((buttonData) => (
						<Button
							key={buttonData.text}
							text={buttonData.text}
							subText={buttonData.subText}
							hasArrowIcon={buttonData.text !== "현재 버전"}
							isSubText={true}
							link={buttonData.link}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default Landing;
