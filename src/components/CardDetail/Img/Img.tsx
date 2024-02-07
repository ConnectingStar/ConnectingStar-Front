import { imgStyle } from "@/components/CardDetail/Img/Img.style";
import PossessionLabel from "@/components/CardDetail/Img/PossessionLabel";
import Star from "@/components/CardDetail/Img/Star";

// TODO: API 연결 후 삭제 예정
interface dataType {
	state: "default" | "selected" | "possession";
}

// TODO: API 연결 후 삭제 예정
const data: dataType = {
	state: "default",
};

export default function Img() {
	return (
		<div css={imgStyle} className={data.state === "selected" ? "selected" : ""}>
			<img src="" alt="별자리" />
			{data.state === "possession" && <PossessionLabel />}
			<Star starNumber={10} />
		</div>
	);
}
