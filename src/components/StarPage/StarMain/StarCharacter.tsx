import { css } from "@emotion/react";

interface Circle {
	// id: number;
	cx: number;
	cy: number;
	r: number;
	filled: boolean;
}

interface StarCharacterProps {
	svgData: {
		width: number;
		viewBox: string;
		fill: string;
		opacity: number;
		stroke: string;
		strokeWidth: number;
		path: string;
		circleList: Circle[];
	};
}

export default function StarCharacter({ svgData }: StarCharacterProps) {
	const { width, viewBox, fill, opacity, stroke, strokeWidth, path, circleList: circle } = svgData;

	return (
		<div css={containerStyle}>
			<svg
				width={width}
				height="100%"
				viewBox={viewBox}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path opacity={opacity} d={path} stroke={stroke} strokeWidth={strokeWidth} />

				{circle.map((circle) => (
					<g filter={circle.filled ? "url(#shadow)" : ""} key={circle.cx}>
						<circle
							cx={circle.cx}
							cy={circle.cy}
							r={circle.filled ? circle.r - 1 : circle.r}
							fill={circle.filled ? "#fff" : fill}
							stroke={circle.filled ? "none" : stroke}
							strokeWidth={circle.filled ? 0 : strokeWidth}
						/>
					</g>
				))}

				<defs>
					<filter id="shadow" filterUnits="userSpaceOnUse">
						<feFlood floodColor="#00B2FF" />
						<feMorphology radius="3" operator="dilate" in="SourceAlpha" />
						<feGaussianBlur stdDeviation="5" />
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.4 0 0 0 0 1 0 0 0 0.95 0" />
						<feBlend mode="normal" in="SourceGraphic" result="shape" />
					</filter>
				</defs>
			</svg>
		</div>
	);
}

const containerStyle = css`
	display: flex;
	justify-content: center;
	height: calc(100dvh - 20.825rem);
`;
