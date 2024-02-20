import { useState } from "react";

import Header from "../common/Header/Header";

import { selectTagModalStyle } from "./SelectTagModal.style";

interface selectTagModal {
	title: string;
	tags: string[];
}

function SelectTagModal({ title, tags }: selectTagModal) {
	const [selectedTag, setSelectedTag] = useState<string | null>(null);

	const handleTagClick = (tag: string) => {
		setSelectedTag(tag);
	};

	return (
		<div css={selectTagModalStyle.container}>
			<Header>
				<Header.CloseButton />
			</Header>
			<h1>{title}</h1>
			<div css={selectTagModalStyle.tags}>
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
				<input type="text" placeholder="직접입력" />
			</div>
		</div>
	);
}

export default SelectTagModal;
