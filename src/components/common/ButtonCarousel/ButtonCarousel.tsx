import { useState } from "react";

import { starTraceButtonData } from "@/constants/myPageConstants";

import {
	flexStyle,
	scrollBoxStyle,
	getButtonStyle,
} from "@/components/common/ButtonCarousel/ButtonCarousel.style";

const ButtonCarousel = () => {
	const [buttonText, setButtonText] = useState("책 읽기");

	return (
		<div css={flexStyle}>
			<div css={scrollBoxStyle}>
				{starTraceButtonData.map((data) => (
					<button
						type="button"
						css={getButtonStyle(buttonText === data.text)}
						key={data.text}
						onClick={() => setButtonText(data.text)}
					>
						<p>{data.text}</p>
					</button>
				))}
			</div>
		</div>
	);
};

export default ButtonCarousel;
