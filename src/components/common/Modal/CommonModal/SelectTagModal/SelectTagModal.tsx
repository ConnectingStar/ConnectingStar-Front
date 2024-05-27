import { useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { updateHabitUserData } from "@/api/user/userSlice";

import type { HabitRequestType } from "@/types/habit";

import { selectTagModalStyle } from "@/components/common/Modal/CommonModal/SelectTagModal/SelectTagModal.style";

interface selectTagModal {
	title: string;
	tags: string[];
	progress?: number;
	addprogress?: () => void;
	updateInputValue?: <Key extends keyof HabitRequestType>(
		key: Key,
		value: HabitRequestType[Key],
	) => void;
}

function SelectTagModal({ title, tags, progress, addprogress, updateInputValue }: selectTagModal) {
	const dispatch = useAppDispatch();

	const [selectedTag, setSelectedTag] = useState<string | null>(null);
	const [isInputFocus, setIsInputFocus] = useState(false);
	const [inputText, setInputText] = useState("");

	const handleInputOnFocus = () => {
		setSelectedTag(null);
		setIsInputFocus(true);
	};

	const confirmSelectedTag = () => {
		const updatedHabit = selectedTag || inputText;

		if (updatedHabit && addprogress !== undefined) {
			if (title === "어떤 습관을 만들어 볼까요?") {
				dispatch(updateHabitUserData({ behavior: updatedHabit }));
				if (progress === 0) addprogress();
			} else if (title === "어떤 사람이 되고 싶으세요?") {
				dispatch(updateHabitUserData({ identity: updatedHabit }));

				if (progress === 1) addprogress();
			}

			dispatch(closeModal());
		}

		if (title === "어떤 사람이 되고 싶으세요?") {
			updateInputValue && updateInputValue("identity", updatedHabit);
		} else if (title === "어떤 습관을 만들어 볼까요?") {
			updateInputValue && updateInputValue("behavior", updatedHabit);
		}

		dispatch(closeModal());
	};

	return (
		<div css={selectTagModalStyle.container}>
			<Header>
				<Header.CloseButton onClick={() => dispatch(closeModal())} />
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
