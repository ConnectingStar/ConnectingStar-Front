import { css } from "@emotion/react";

import { motion } from "framer-motion";

import { Svg } from "@/types/star";

import { STARLIGHT } from "@/constants/starPageConstants";

interface StarCharacterProps {
	svgData: Svg;
	image: string;
}

export default function StarCharacter({ svgData, image }: StarCharacterProps) {
	const { viewBox, fill, opacity, stroke, strokeWidth, path, circleList: circle } = svgData;

	return (
		<div css={containerStyle}>
			<svg
				css={svgStyle}
				width="100%"
				height="100%"
				viewBox={viewBox}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path opacity={opacity} d={path} stroke={stroke} strokeWidth={strokeWidth} />

				{circle.map((circle, index) => (
					<g filter={circle.filled ? `url(#shadow${index})` : ""} key={index}>
						<motion.circle
							cx={circle.cx}
							cy={circle.cy}
							animate={{
								r: circle.filled ? circle.r - 1 : circle.r,
								fill: circle.filled ? "#fff" : fill,
								stroke: circle.filled ? "#ffffff0" : stroke,
								strokeWidth: circle.filled ? 0 : strokeWidth,
							}}
							transition={{ duration: 0.3, ease: "easeIn" }}
						/>
						{circle.filled && (
							<defs>
								<filter id={`shadow${index}`} filterUnits="userSpaceOnUse">
									<feFlood floodColor="#00B2FF" />
									<feMorphology radius="3" operator="dilate" in="SourceAlpha" />
									<feGaussianBlur stdDeviation="5" />
									<motion.feColorMatrix
										type="matrix"
										initial={{ values: STARLIGHT.OFF }}
										animate={{ values: STARLIGHT.ON }}
										transition={{ duration: 0.3, ease: "easeIn" }}
									/>
									<feBlend mode="normal" in="SourceGraphic" result="shape" />
								</filter>
							</defs>
						)}
					</g>
				))}
			</svg>

			{image && (
				<motion.div
					css={imageStyle}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1, ease: "easeIn" }}
				>
					<img src={image} alt="캐릭터" />
				</motion.div>
			)}
		</div>
	);
}

const containerStyle = css`
	display: flex;
	justify-content: center;
	height: calc(100dvh - 20.825rem - env(safe-area-inset-top) - env(safe-area-inset-bottom));
	position: relative;
`;

const svgStyle = css`
	position: absolute;
`;

const imageStyle = css`
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
		height: auto;
		max-height: 100%;
	}
`;
