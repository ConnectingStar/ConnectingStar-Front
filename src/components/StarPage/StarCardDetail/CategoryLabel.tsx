import {
	containerStyle,
	categoryLabelStyle,
} from "@/components/StarPage/StarCardDetail/CategoryLabel.style";

// TODO: API 연결 후 삭제 예정
const data = [
	{ id: 1, category: "마음 강화" },
	{ id: 2, category: "정체성" },
];

export default function CategoryLabel() {
	return (
		<div css={containerStyle}>
			{data.map((item) => (
				<div key={item.id} css={categoryLabelStyle}>
					{item.category}
				</div>
			))}
		</div>
	);
}
