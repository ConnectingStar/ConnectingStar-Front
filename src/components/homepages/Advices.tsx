import { useState, useRef, useEffect } from "react";

import banner01 from "@/assets/image/img-homepage-banner-01.png";
import banner02 from "@/assets/image/img-homepage-banner-02.png";
import banner03 from "@/assets/image/img-homepage-banner-03.png";
import banner04 from "@/assets/image/img-homepage-banner-04.png";
import banner05 from "@/assets/image/img-homepage-banner-05.png";

import { advicesStyle } from "@/components/homepages/Advices.style";

function Advices() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const images: string[] = [banner01, banner02, banner03, banner04, banner05];
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	useEffect(() => {
		containerRef.current?.scrollTo({
			left:
				(containerRef.current?.scrollWidth - containerRef.current?.offsetWidth) *
				(currentIndex / 4),
			behavior: "smooth",
		});
	}, [currentIndex]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((currentIndex + 1) % 5);
		}, 4000);
		return () => clearInterval(intervalId);
	}, [currentIndex]);

	return (
		<section css={advicesStyle.container} ref={containerRef}>
			<ul css={advicesStyle.advicesCarousel}>
				{images.map((image, idx) => {
					return (
						<li css={advicesStyle.adviceWrapper} key={idx}>
							<img src={image}></img>
						</li>
					);
				})}
			</ul>
		</section>
	);
}

export default Advices;
