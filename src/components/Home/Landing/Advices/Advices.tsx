import Slider from "react-slick";

import { adviceImages } from "@/constants/homeConstants";

import { advicesWrapperStyle } from "@/components/Home/Landing/Advices/Advices.style";

function Advices() {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
	};

	return (
		<div css={advicesWrapperStyle}>
			<Slider {...settings}>
				{adviceImages.map((image) => (
					<div>
						<img src={image.src} alt={image.alt} />
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Advices;
