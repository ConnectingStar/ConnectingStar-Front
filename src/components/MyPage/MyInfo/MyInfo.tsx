import Button from "@/components/MyPage/Button/Button";

import { myInfoButtonData } from "@/constants/myPageConstants";

import {
	layoutStyle,
	characterBoxStyle,
	buttonBoxStyle,
} from "@/components/MyPage/MyInfo/MyInfo.style";

const MyInfo = () => {
	return (
		<div css={layoutStyle}>
			<div css={characterBoxStyle}>
				<button>
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
							isSubText={true}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default MyInfo;
