import ButtonCarousel from "@/components/MyPage/StarTrace/ButtonCarousel";
import SortButton from "@/components/MyPage/StarTrace/SortButton";

import { layoutStyle } from "@/components/MyPage/StarTrace/StarTrace.style";

const StarTrace = () => {
	return (
		<>
			<ButtonCarousel />
			<SortButton />
			<div css={layoutStyle}></div>
		</>
	);
};

export default StarTrace;
