import BlueexplanationMarkIcon from "@/assets/icon/ic-blue-exclamation-mark.svg?react";
import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import { useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

interface SubConditionProps {
	subtitle: string;
	explanation: string | undefined;
	modalName: string;
	placeholder: string;
	placeholderSecond: string | undefined;
}

function HabitGenerateConditions({
	subtitle,
	explanation,
	modalName,
	placeholder,
	placeholderSecond,
}: SubConditionProps) {
	const dispatch = useAppDispatch();
	// const { modal } = useAppSelector((state) => state.modal);
	// const [timeModalTitle, setTimeModalTitle] = useState("시간을 선택해 주세요");
	const handleClick = (modalName: string, placeText: string) => {
		dispatch(openModal(modalName));
		console.log(placeText);
		// if (modalName === modalType.SELECT_RUNTIME) {
		// 	setTimeModalTitle(placeText);
		// }
	};
	return (
		<li key={subtitle}>
			<div>
				<span>{subtitle}</span>
				{explanation && <BlueexplanationMarkIcon />}
				{explanation && <span>{explanation}</span>}
			</div>
			<div
				onClick={() => handleClick(modalName, placeholder)}
				className={placeholderSecond ? "split" : "sticked"}
			>
				<span>{placeholder}</span>
				{placeholderSecond ? <span> {placeholderSecond}</span> : <DownArrowIcon />}
			</div>
		</li>
	);
}

export default HabitGenerateConditions;
