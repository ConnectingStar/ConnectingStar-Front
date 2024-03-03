import { useState, useRef, useEffect } from "react";

import { adviceImages } from "@/constants/homeConstants";

import { advicesStyle } from "@/components/Home/Landing/Advices/Advices.style";

function Advices() {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		if (!containerRef.current) {
			return;
		}

		const intervalImages = setInterval(() => {
			setCurrentIndex((currentIndex + 1) % 5);
		}, 4000);

		containerRef.current.scrollTo({
			left:
				(containerRef.current.scrollWidth - containerRef.current.offsetWidth) * (currentIndex / 4),
			behavior: "smooth",
		});

		return () => clearInterval(intervalImages);
	}, [currentIndex]);

	return (
		<section css={advicesStyle.container} ref={containerRef}>
			<ul css={advicesStyle.advicesCarousel}>
				{adviceImages.map((image) => (
					<li key={image.src}>
						<img src={image.src} alt={image.alt} />
					</li>
				))}
			</ul>
		</section>
	);
}

export default Advices;
