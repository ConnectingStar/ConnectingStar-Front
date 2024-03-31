import { useState } from "react";
import { useDispatch } from "react-redux";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";

import { closeModal } from "@/api/modal/modalSlice";
import { updataHabitUserData } from "@/api/user/userSlice";

import { selectTagModalStyle } from "@/components/common/Modal/CommonModal/SelectTagModal/SelectTagModal.style";
interface selectTagModal {
	title: string;
	tags: string[];
}

function SelectTagModal({ title, tags }: selectTagModal) {
	const [selectedTag, setSelectedTag] = useState<string | null>(null);
	const [isInputFocus, setIsInputFocus] = useState(false);
	const [inputText, setInputText] = useState("");
	const dispatch = useDispatch();
	const handleInputOnFocus = () => {
		setSelectedTag(null);
		setIsInputFocus(true);
	};

	const confirmSelectedTag = () => {
		const updatedHabit = selectedTag || inputText;

		if (updatedHabit) {
			if (title === "어떤 습관을 만들어 볼까요?") {
				dispatch(updataHabitUserData({ habit: updatedHabit }));
			} else if (title === "어떤 사람이 되고 싶으세요?") {
				dispatch(updataHabitUserData({ identity: updatedHabit }));
			}
			dispatch(closeModal());
		}
	};

	return (
		<div css={selectTagModalStyle.container}>
			{/* TODO: 닫기누르면 모달 닫기 */}
			<Header>
				<Header.CloseButton />
			</Header>
			<div css={selectTagModalStyle.wrap}>
				<h1>{title}</h1>
				<div css={selectTagModalStyle.tags(isInputFocus === true)}>
					<ul>
						{tags.map((item) => (
							<li
								key={item}
								onClick={() => setSelectedTag((prevTag) => (prevTag === item ? null : item))}
								className={selectedTag === item ? "selected" : ""}
							>
								{item}
							</li>
						))}
					</ul>
					<input
						type="text"
						placeholder="직접입력"
						className={!selectedTag && inputText !== "" ? "selected" : ""}
						onFocus={handleInputOnFocus}
						onChange={(e) => setInputText(e.target.value)}
						onBlur={() => setIsInputFocus(false)}
					/>
				</div>
			</div>
			{isInputFocus ? (
				<FooterBtn
					text="확인"
					isSquare
					isTransparent
					disabled={inputText === ""}
					handleBtnClick={() => {
						setIsInputFocus(false);
					}}
				/>
			) : (
				<FooterBtn
					text="선택"
					disabled={(selectedTag || inputText) === ""}
					handleBtnClick={confirmSelectedTag}
					isTransparent
				/>
			)}
		</div>
	);
}

export default SelectTagModal;
