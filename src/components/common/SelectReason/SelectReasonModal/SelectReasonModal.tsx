import { css } from "@emotion/react";

import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { theme } from "@/styles/theme";

const SelectReasonModal = ({
	changeReason,
	reasonData,
	reasonDefaultText,
}: {
	changeReason: React.Dispatch<React.SetStateAction<string>>;
	reasonData: (
		| {
				title: string;
				placeholder: string;
				subText: string;
		  }
		| {
				title: string;
				subText: string;
				placeholder?: undefined;
		  }
	)[];
	reasonDefaultText: string;
}) => {
	const dispatch = useAppDispatch();

	const handleReasonClick = (reason: string) => {
		changeReason(reason);
		dispatch(closeModal());
	};

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>{reasonDefaultText}</h1>
				<ul>
					{reasonData.map((data) => (
						<li key={data.title} onClick={() => handleReasonClick(data.title)}>
							<p>{data.title}</p>
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
};

export default SelectReasonModal;

export const layoutStyle = css`
	padding: 1.125rem 1.5rem;
	border-radius: 15px 15px 0 0;
	color: ${theme.color.font_black};
	background-color: #fff;

	& > h1 {
		${theme.font.header};
		margin-bottom: 0.6875rem;
	}

	& > ul > li {
		display: flex;
		align-items: center;
		height: 3.625rem;
	}
`;
