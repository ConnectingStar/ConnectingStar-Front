import { useState, useRef, useEffect } from "react";

import { adviceImages } from "@/constants/homeConstants";

import {
	advicesWrapperStyle,
	containerStyle,
	advicesStyle,
	listStyle,
} from "@/components/Home/Landing/Advices/Advices.style";

function Advices() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const timeoutRef = useRef(0);
	const timeintervalRef = useRef(0);

	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		if (!containerRef.current) {
			return;
		}
		const scrollWidth = containerRef.current.scrollWidth - containerRef.current.offsetWidth;

		containerRef.current.scrollTo({
			left: (scrollWidth / 4) * (currentIndex % 5),
			behavior: "smooth",
		});
	}, [currentIndex]);

	const handleScroll = () => {
		if (!containerRef.current) return;

		clearTimeout(timeoutRef.current);
		clearInterval(timeintervalRef.current);
		const pageWidth = (containerRef.current.scrollWidth - containerRef.current.offsetWidth) / 4;
		const index = Math.floor((containerRef.current.scrollLeft + pageWidth / 2) / pageWidth);

		timeoutRef.current = setTimeout(() => {
			setCurrentIndex(index);
		}, 250);

		timeintervalRef.current = setInterval(() => {
			setCurrentIndex((prev) => prev + 1);
		}, 4000);
	};

	return (
		<div css={advicesWrapperStyle}>
			<div css={containerStyle} ref={containerRef} onScroll={handleScroll}>
				<ul css={advicesStyle}>
					{adviceImages.map((image) => (
						<li key={image.src}>
							<img src={image.src} alt={image.alt} />
						</li>
					))}
				</ul>
			</div>
			<ul>
				{Array.from({ length: 5 }).map((_, idx) => {
					return <li key={idx} css={listStyle(idx === currentIndex)} />;
				})}
			</ul>
		</div>
	);
}

export default Advices;
