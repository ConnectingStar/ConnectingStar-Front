import { Dispatch, SetStateAction } from "react";

import { css } from "@emotion/react";

import CheckIcon from "@/assets/icon/ic-check.svg?react";

import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { theme } from "@/styles/theme";

const sortData = [
	{
		text: "최신순",
	},
	{
		text: "오래된순",
	},
];

const SortModal = ({
	sortOption,
	changeSortOption,
}: {
	sortOption: string;
	changeSortOption: Dispatch<SetStateAction<string>>;
}) => {
	const dispatch = useAppDispatch();

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>정렬기준</h1>
				<ul>
					{sortData.map((data) => (
						<li key={data.text}>
							<input
								type="checkbox"
								id={data.text}
								onChange={() => {
									changeSortOption(data.text);
									dispatch(closeModal());
								}}
							/>
							<label htmlFor={data.text} css={getCheckBoxLabelStyle(sortOption === data.text)}>
								{sortOption === data.text && <CheckIcon />}
							</label>
							<p>{data.text}</p>
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
};

export default SortModal;

export const layoutStyle = css`
	padding: 1.125rem 1.5rem 2rem;
	border-radius: 15px 15px 0 0;
	color: ${theme.color.font_black};
	background-color: #fff;

	& > h1 {
		color: ${theme.color.font_black};
		${theme.font.header};
	}

	& > ul {
		margin-top: 1.875rem;
		display: flex;
		flex-direction: column;
		gap: 2.25rem;

		& > li {
			display: flex;
			align-items: center;
			gap: 20px;

			& > p {
				color: ${theme.color.font_black};
			}

			& > input {
				display: none;
			}
		}
	}
`;

export const getCheckBoxLabelStyle = (isCheck: boolean) => {
	return css`
		width: 24px;
		height: 24px;
		border: 1px solid ${isCheck ? theme.color.main_blue : theme.color.button_disabled};
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${isCheck && theme.color.main_blue};
	`;
};
