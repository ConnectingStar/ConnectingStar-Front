import React from "react";

import { css } from "@emotion/react";

import FooterBtn from "../common/FooterBtn/FooterBtn";
import Modal from "../common/Modal/Modal";

import { theme } from "@/styles/theme";

function BehaviorModal() {
	//TODO: "무엇을"에 해당하는 습관 가져오기
	const habit = "자격증 공부하기";

	return (
		<Modal isBottomSheet>
			<div css={BehaviorModalStyle.container}>
				<h1>행동을 입력해 주세요</h1>
				<div css={BehaviorModalStyle.wrap}>
					<div>
						<h3>무엇을</h3>
						<div>{habit}</div>
					</div>
					<div>
						<h3>얼마나</h3>
						<form>
							<input type="number" placeholder="숫자 입력" />
							<input type="text" placeholder="단위 입력(예: 페이지)" />
						</form>
					</div>
				</div>
			</div>
			<FooterBtn text="다음" isSquare />
		</Modal>
	);
}

export default BehaviorModal;

const BehaviorModalStyle = {
	container: css`
		height: 19.375rem;
		border-radius: 15px 15px 0 0;
		padding: 1.125rem 1.5rem 3.438rem 1.5rem;
		${theme.font.body_a}
		color: ${theme.color.font_black};
		background-color: #fff;
		h1 {
			${theme.font.header}
			height: 1.813rem;
			margin-bottom: 1.688rem;
		}
	`,
	wrap: css`
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		h3 {
			${theme.font.head_c};
			color: ${theme.color.font_gray};
			margin-bottom: 0.75rem;
		}

		form {
			display: flex;
			gap: 6px;
			height: 3.438rem;

			& > input {
				all: unset;
				border-radius: 15px;
				background-color: ${theme.color.bg};
				color: ${theme.color.font_black};
				padding: 1rem;
			}

			& :first-of-type {
				width: 6.25rem;
			}

			& :last-of-type {
				width: 100%;
			}
		}
	`,
};
