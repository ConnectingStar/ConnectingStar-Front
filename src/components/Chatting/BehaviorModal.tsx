import { useState } from "react";

import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import { updateHabitUserData } from "@/api/user/userSlice";

import { theme } from "@/styles/theme";

import type { HabitRequestType } from "@/types/habit";

interface BehaviorModalProps {
	behavior: string;
	prevValue?: string;
	prevUnit?: string;
	progress?: number;
	addprogress?: () => void;
	updateInputValue?: <Key extends keyof HabitRequestType>(
		key: Key,
		value: HabitRequestType[Key],
	) => void;
}

function BehaviorModal({
	behavior,
	prevValue,
	prevUnit,
	progress,
	addprogress,
	updateInputValue,
}: BehaviorModalProps) {
	const dispatch = useAppDispatch();

	const [behaviorValue, setBehaviorValue] = useState<string | undefined>(prevValue ?? undefined);
	const [behaviorUnit, setBehaviorUnit] = useState<string>(prevUnit ?? "");

	const confirmSelectedTag = () => {
		progress === 6 && addprogress && addprogress();

		if (behaviorValue && behaviorUnit) {
			dispatch(updateHabitUserData({ behaviorValue, behaviorUnit }));

			if (updateInputValue) {
				updateInputValue("behaviorValue", behaviorValue);
				updateInputValue("behaviorUnit", behaviorUnit);
			}

			dispatch(closeModal());
		}
	};
	return (
		<Modal isBottomSheet>
			<div css={container}>
				<h1>얼마나 실천할지 입력해 주세요</h1>
				<div css={wrap}>
					<div>
						<h3>무엇을</h3>
						<div>{behavior}</div>
					</div>
					<div>
						<h3>얼마나</h3>
						<form>
							<input
								type="number"
								placeholder="숫자 입력"
								autoFocus
								value={behaviorValue}
								onChange={(e) => setBehaviorValue(e.target.value)}
							/>
							<input
								type="text"
								placeholder="단위 입력 (예: 페이지)"
								value={behaviorUnit}
								onChange={(e) => setBehaviorUnit(e.target.value)}
							/>
						</form>
					</div>
				</div>
			</div>
			<FooterBtn
				text="확인"
				isSquare
				handleBtnClick={confirmSelectedTag}
				disabled={!behaviorUnit || !behaviorValue}
			/>
		</Modal>
	);
}

export default BehaviorModal;

const container = css`
	height: 19.375rem;
	border-radius: 15px 15px 0 0;
	padding: 1.125rem 1.5rem 3.438rem;
	${theme.font.body_a}
	color: ${theme.color.font_black};
	background-color: #fff;
	h1 {
		${theme.font.header}
		height: 1.813rem;
		margin-bottom: 1.688rem;
	}
`;

const wrap = css`
	display: flex;
	flex-direction: column;
	gap: 20px;
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
			::placeholder {
				color: ${theme.color.button_deactivated};
			}
		}

		& :first-of-type {
			width: 6.25rem;
		}

		& :last-of-type {
			width: 100%;
		}
	}
`;
