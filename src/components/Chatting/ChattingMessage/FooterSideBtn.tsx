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
	width: 100%;
	max-width: 500px; // TODO: globalStyle max-width와 동일(추후 600으로 변경 필요)
	padding: 0 1.5rem;
	gap: 0.375rem;
	position: fixed;
	bottom: 5.188rem;
	left: 50%;
	transform: translateX(-50%);
	& > button {
		border: 2px solid ${theme.color.main_blue};
		color: ${theme.color.main_blue};
		${theme.font.body_b};
		border-radius: 20px;
		padding: 0.375rem 1.563rem;
		background-color: white;
	}
`;

export const sideButton = css`
	${commonButton};
	justify-content: center;
	& > button {
		width: 9.563rem;
	}
`;

export const scrollButton = css`
	${commonButton};
	overflow-x: auto;
	&::-webkit-scrollbar {
		display: none;
	}
	& > button {
		white-space: nowrap;
		flex: 0 0 auto;
	}
`;
