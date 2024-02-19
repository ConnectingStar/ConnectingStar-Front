import { css } from "@emotion/react";

import { HabitsObj } from "@/components/homepages/Habits";
import { theme } from "@/styles/theme";

import { checkHabitModalStyle } from "@/components/homepages/CheckHabitModal/CheckHabitModal.style";

enum Status {
	None = "none",
	Rest = "rest",
	Checked = "checked",
}

interface ModalProps {
	isCheckModal: boolean;
	setIsCheckModal: React.Dispatch<React.SetStateAction<boolean>>;
	modalTarget: HabitsObj | null;
	handleStatus: (status: Status) => void;
}

function CheckHabitModalStyle({
	isCheckModal,
	setIsCheckModal,
	modalTarget,
	handleStatus,
}: ModalProps) {
	return (
		<div
			css={checkHabitModalStyle.container}
			style={{ display: isCheckModal ? "block" : "none" }}
			onClick={() => setIsCheckModal(false)}
		>
			<section css={checkHabitModalStyle.modalWrapper}>
				<span
					css={css`
						${theme.font.body_a_bold}
					`}
				>
					아래의 습관을 실천하였나요?
				</span>
				<span css={checkHabitModalStyle.articleWrapper}>{modalTarget?.article}</span>
				<div css={checkHabitModalStyle.buttonWrapper}>
					<span
						className="deactivated"
						css={checkHabitModalStyle.button}
						onClick={() => handleStatus(Status.None)}
					>
						초기화
					</span>
					<span
						className="deactivated"
						css={checkHabitModalStyle.button}
						onClick={() => handleStatus(Status.Rest)}
					>
						쉬는 날
					</span>
					<span
						className="activated"
						css={checkHabitModalStyle.button}
						onClick={() => handleStatus(Status.Checked)}
					>
						실천 완료
					</span>
				</div>
			</section>
		</div>
	);
}

export default CheckHabitModalStyle;
