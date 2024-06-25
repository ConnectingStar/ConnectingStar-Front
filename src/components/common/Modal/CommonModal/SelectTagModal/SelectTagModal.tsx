import { useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { updateHabitUserData } from "@/api/user/userSlice";

import type { HabitRequestType } from "@/types/habit";

import {
	container,
	wrap,
	tagStyle,
} from "@/components/common/Modal/CommonModal/SelectTagModal/SelectTagModal.style";

interface selectTagModalType {
	type: string;
	tags: string[];
	progress?: number;
	addprogress?: () => void;
	updateInputValue?: <Key extends keyof HabitRequestType>(
		key: Key,
		value: HabitRequestType[Key],
	) => void;
}

function SelectTagModal({
	type,
	tags,
	progress,
	addprogress,
	updateInputValue,
}: selectTagModalType) {
	const dispatch = useAppDispatch();

	const [selectedTag, setSelectedTag] = useState<string | null>(null);
	const [inputText, setInputText] = useState("");
	const [isInputFocus, setIsInputFocus] = useState<boolean>(false);

	const handleInputOnFocus = () => {
		setSelectedTag(null);
		setIsInputFocus(true);
	};

	const confirmSelectedTag = () => {
		const updatedHabit = selectedTag || inputText;

		// 온보딩시
		if (addprogress) {
			if (type === "behavior") {
				dispatch(updateHabitUserData({ behavior: updatedHabit }));
				progress === 0 && addprogress();
			} else if (type === "identity") {
				dispatch(updateHabitUserData({ identity: updatedHabit }));
				progress === 1 && addprogress();
			}
		}

		// 행동, 정체성 수정시
		if (!addprogress) {
			type === "behavior" && updateInputValue && updateInputValue("identity", updatedHabit);
			type === "identity" && updateInputValue && updateInputValue("behavior", updatedHabit);
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
