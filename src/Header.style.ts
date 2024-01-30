import { css } from "@emotion/react";

export const headerStyle = {
	container: css`
		height: 3.5rem;
		position: relative;
		line-height: 3.5rem; // TODO: line-height으로 세로기준 중앙정렬 중인데 예상되는 문제 없는지 생각해보기
		background-color: #fff;
	`,

	title: css`
		font-size: 1.25rem;
		font-weight: 500;
		text-align: center;
	`,

	leftIconButton: css`
		display: block;
		margin-left: 1.5rem;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	`,

	actionButton: css`
		margin-right: 1.5rem; // TODO: 터치 영역 고려해야 함(현재는 line-height으로 터치 영역이 적용되는 중이라 위아래로 긴 형태)
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		font-weight: 500;
		color: #505050;
		background-color: transparent;
	`,

	titleLarge: css`
		padding-left: 1.5rem;
		text-align: left;
		font-size: 1.5rem;
	`,
};
