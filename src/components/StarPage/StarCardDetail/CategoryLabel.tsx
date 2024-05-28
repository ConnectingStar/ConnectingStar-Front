import {
	containerStyle,
	categoryLabelStyle,
} from "@/components/StarPage/StarCardDetail/CategoryLabel.style";

export default function CategoryLabel({ typeName }: { typeName: string }) {
	return (
		<div css={containerStyle}>
			<div css={categoryLabelStyle}>{typeName}</div>
		</div>
	);
}
