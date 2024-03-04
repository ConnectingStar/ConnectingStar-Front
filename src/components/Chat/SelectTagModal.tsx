import { useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Header from "@/components/common/Header/Header";

import { userDataFrame } from "@/pages/ChatPage";

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

	const handleInputOnFocus = () => {
		setSelectedTag(null);
		setIsInputFocus(true);
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
					isTransparent
				/>
			)}
		</div>
	);
}

export default SelectTagModal;
