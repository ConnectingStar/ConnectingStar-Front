import { storyStyle, titleStyle, descriptionStyle } from "./Story.style";

export default function Story({ story }: { story: string }) {
	return (
		<div css={storyStyle}>
			<strong css={titleStyle}>스토리</strong>
			<p css={descriptionStyle}>{story}</p>
		</div>
	);
}
