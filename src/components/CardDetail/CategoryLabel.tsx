import { categoryLabelStyle } from "@/components/CardDetail/CategoryLabel.style";
import Label from "@/components/CardDetail/Label";

// TODO: API 연결 후 삭제 예정
const data = [
	{ id: 1, category: "마음 강화" },
	{ id: 2, category: "정체성" },
];

export default function CategoryLabel() {
	return (
		<div css={categoryLabelStyle}>
			{data.map((item) => (
				<Label key={item.id}>{item.category}</Label>
			))}
		</div>
	);
}
