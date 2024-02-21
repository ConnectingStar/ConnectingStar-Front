import { storyStyle, titleStyle, descriptionStyle } from "./Story.style";

export default function Story() {
	return (
		<div css={storyStyle}>
			<strong css={titleStyle}>스토리</strong>
			<p css={descriptionStyle}>캐릭터 스토리 설명글</p>
		</div>
	);
}
