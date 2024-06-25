import { css } from "@emotion/react";

import { useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { theme } from "@/styles/theme";

interface FooterSideBtnType {
	bottomButton: string[];
	modalType?: (string | null)[];
}

function FooterSideBtn({ bottomButton, modalType }: FooterSideBtnType) {
	const dispatch = useAppDispatch();

	//사이드버튼 함수
	const handleSideButton = (index: number) => {
		modalType !== undefined && dispatch(openModal(modalType[index + 1]));
	};

	return (
		<>
			{bottomButton.length > 1 && (
				<div css={bottomButton.length === 3 ? sideButton : scrollButton}>
					{bottomButton.slice(1).map((item, index) => (
						<button key={item} onClick={() => handleSideButton(index)}>
							{item}
						</button>
					))}
				</div>
			)}
		</>
	);
}

export default FooterSideBtn;

const commonButton = css`
	display: flex;
	position: fixed;
	bottom: 5.188rem;
	left: 50%;
	width: 22.5rem;
	height: 2.25rem;
	padding: 0 1.5rem;
	gap: 0.375rem;
	& > button {
		border: 2px solid ${theme.color.main_blue};
		color: ${theme.color.main_blue};
		${theme.font.body_b};
		border-radius: 20px;
		padding: 0.438rem 1.563rem;
		background-color: white;
	}
`;

export const sideButton = css`
	${commonButton};
	transform: translateX(-50%);
	& > button {
		width: 9.563rem;
	}
`;

export const scrollButton = css`
	${commonButton};
	transform: translateX(-11.25rem);
	overflow-x: auto;
	&::-webkit-scrollbar {
		display: none;
	}
	& > button {
		white-space: nowrap;
		flex: 0 0 auto;
	}
`;
