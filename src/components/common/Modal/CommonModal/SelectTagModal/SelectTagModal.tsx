import { useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import type { HabitRequestType } from "@/types/habit";

import {
	container,
	wrap,
	tagStyle,
} from "@/components/common/Modal/CommonModal/SelectTagModal/SelectTagModal.style";

interface selectTagModalType {
	type: string;
	tags: string[];
	prevValue: string;
	updateInputValue: <Key extends keyof HabitRequestType>(
		key: Key,
		value: HabitRequestType[Key],
	) => void;
	progress?: number;
	addprogress?: () => void;
}

function SelectTagModal({
	type,
	tags,
	prevValue,
	updateInputValue,
	progress,
	addprogress,
}: selectTagModalType) {
	const dispatch = useAppDispatch();

	const [selectedTag, setSelectedTag] = useState<string | null>(prevValue ?? null);
	const [inputText, setInputText] = useState("");
	const [isInputFocus, setIsInputFocus] = useState<boolean>(false);

	const handleInputOnFocus = () => {
		setSelectedTag(null);
		setIsInputFocus(true);
	};

	const confirmSelectedTag = () => {
		const updatedHabit = selectedTag || inputText;

		if (type === "behavior") {
			updateInputValue("behavior", updatedHabit);
			progress === 0 && addprogress && addprogress();
		} else if (type === "identity") {
			updateInputValue("identity", updatedHabit);
			progress === 1 && addprogress && addprogress();
		}

		dispatch(closeModal());
	};

	return (
		<div css={container}>
			<Header>
				<Header.CloseButton onClick={() => dispatch(closeModal())} />
			</Header>

			<div css={wrap}>
				<h1>{type === "behavior" ? "어떤 습관을 만들어 볼까요?" : "어떤 사람이 되고 싶으세요?"}</h1>
				<div css={tagStyle(isInputFocus)}>
					<ul>
						{tags.map((tag) => (
							<li
								key={tag}
								onClick={() => setSelectedTag((prevTag) => (prevTag === tag ? null : tag))}
								className={selectedTag === tag ? "selected" : ""}
							>
								{tag}
							</li>
						))}
					</ul>
					<input
						type="text"
						placeholder="직접입력"
						maxLength={10}
						className={!selectedTag && inputText !== "" ? "selected" : ""}
						onFocus={handleInputOnFocus}
						onChange={(e) => setInputText(e.target.value)}
						onBlur={() => setIsInputFocus(false)}
					/>
				</div>
			</div>

			<FooterBtn
				text={isInputFocus ? "확인" : "선택"}
				isSquare={isInputFocus}
				isTransparent
				disabled={inputText === "" && !selectedTag}
				handleBtnClick={isInputFocus ? () => setIsInputFocus(false) : confirmSelectedTag}
			/>
		</div>
	);
}

export default SelectTagModal;
