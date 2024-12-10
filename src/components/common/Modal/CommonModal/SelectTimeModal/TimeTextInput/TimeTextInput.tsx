import {
	listStyle,
	inputStyle,
} from "@/components/common/Modal/CommonModal/SelectTimeModal/TimeTextInput/TimeTextInput.style";

interface TimeTextInputProps {
	valueKey: string;
	selectTime: string;
	handleChangeTime: (target: string, value: string) => void;
}

const TimeTextInput = ({ valueKey, selectTime, handleChangeTime }: TimeTextInputProps) => {
	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChangeTime(valueKey, e.target.value);
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
				value={selectTime}
				onChange={handleChangeInput}
				onInput={handleInputMaxLength}
			/>
		</ul>
	);
};

export default TimeTextInput;
