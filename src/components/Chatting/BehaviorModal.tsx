import React, { useRef, useState } from "react";

import { css } from "@emotion/react";

import FooterBtn from "../common/FooterBtn/FooterBtn";
import Modal from "../common/Modal/Modal";

import { theme } from "@/styles/theme";

function BehaviorModal() {
	const [unitNumber, setUnitNumber] = useState<string>();
	const [unit, setUnit] = useState<string>();
	const [isNextBtn, setIsNextBtn] = useState(false);
	//TODO: "무엇을"에 해당하는 "습관" 가져오기
	const habit = "자격증 공부하기";
	const unitInputRef = useRef<HTMLInputElement>(null); // "단위" 입력 필드를 위한 ref 생성

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
							<input
								type="number"
								placeholder="숫자 입력"
								autoFocus
								onChange={(e) => {
									setUnitNumber(e.target.value);
								}}
							/>
							<input
								ref={unitInputRef}
								type="text"
								placeholder="단위 입력(예: 페이지)"
								onChange={(e) => {
									setUnit(e.target.value);
								}}
							/>
						</form>
					</div>
				</div>
			</div>
			{isNextBtn ? (
				<FooterBtn
					text="확인"
					isSquare
					handleBtnClick={() => {
						//TODO: behavior 전송
						if (unit && unitNumber) alert(unitNumber + unit);
					}}
					disabled={!unitNumber || !unit}
				/>
			) : (
				<FooterBtn
					text="다음"
					isSquare
					handleBtnClick={() => {
						unitInputRef.current?.focus(); // 확인버튼으로 자동으로 넘어감
						setIsNextBtn(true);
					}}
					disabled={!unitNumber && !unit}
				/>
			)}
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
