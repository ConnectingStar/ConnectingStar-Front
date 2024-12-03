import { useState } from "react";

import {
	listStyle,
	inputStyle,
} from "@/components/common/Modal/CommonModal/SelectTimeModal/TimeTextInput/TimeTextInput.style";

const TimeTextInput = () => {
	const [inputNum, setInputNum] = useState<number>(0);

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputNum(Number(e.target.value));
	};

	const handleInputMaxLength = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length > e.target.maxLength)
			e.target.value = e.target.value.slice(0, e.target.maxLength);
	};

	return (
		<ul css={listStyle}>
			<input
				css={inputStyle}
				maxLength={2}
				type="number"
				value={inputNum}
				onChange={handleChangeInput}
				onInput={handleInputMaxLength}
			/>
		</ul>
	);
};

export default TimeTextInput;
