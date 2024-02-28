import { useState } from "react";

import FooterBtn from "../common/FooterBtn/FooterBtn";
import Header from "../common/Header/Header";

import { userDataFrame } from "@/pages/ChattingPage";

import { selectTagModalStyle } from "@/components/Chat/SelectTagModal.style";

interface selectTagModal {
	title: string;
	tags: string[];
	setUserData: React.Dispatch<React.SetStateAction<typeof userDataFrame>>;
}

function SelectTagModal({ title, tags, setUserData }: selectTagModal) {
	const [selectedTag, setSelectedTag] = useState<string | null>(null);
	const [isInputFocus, setIsInputFocus] = useState(false);
	const [inputText, setInputText] = useState("");

	// 태그 선택 함수
	const handleTagClick = (tag: string) => {
		setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	};

	const handleInputOnFocus = () => {
		setSelectedTag(null);
		setIsInputFocus(true);
	};

	const handleInputOnBlur = () => {
		setIsInputFocus(false);
	};

	const confirmSelectedTag = () => {
		const updatedHabit = selectedTag || inputText; // 선택된 태그 또는 입력된 텍스트 중 하나를 선택

		if (updatedHabit) {
			setUserData((prevData) => ({
				...prevData,
				habit: updatedHabit,
			}));
		}
	};

	return (
		<div css={selectTagModalStyle.container}>
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
								onClick={() => handleTagClick(item)}
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
						onChange={handleInputChange}
						onBlur={handleInputOnBlur}
					/>
				</div>
			</div>
			{isInputFocus ? (
				<FooterBtn
					text="확인"
					isSquare
					disabled={inputText === "" ? true : false}
					handleBtnClick={() => {
						setIsInputFocus(false);
					}}
				/>
			) : (
				<FooterBtn
					text="선택"
					disabled={selectedTag || inputText !== "" ? false : true}
					handleBtnClick={confirmSelectedTag}
				/>
			)}
		</div>
	);
}

export default SelectTagModal;
