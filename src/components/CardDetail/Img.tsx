import { imgStyle } from "@/components/CardDetail/Img.style";
import PossessionLabel from "@/components/CardDetail/PossessionLabel";
import Star from "@/components/CardDetail/Star";

// TODO: API 연결 후 삭제 예정
interface dataType {
	image: string;
	name: string;
	state: "default" | "selected" | "possession";
	star: number;
}

// TODO: API 연결 후 삭제 예정
const data: dataType = {
	image: "",
	name: "미어캣 별자리",
	state: "default",
	star: 10,
};

export default function Img() {
	return (
		<div css={imgStyle} className={data.state === "selected" ? "selected" : ""}>
			<img src={data.image} alt={data.name} />
			{data.state === "possession" && <PossessionLabel />}
			<Star>{data.star}</Star>
		</div>
	);
}
