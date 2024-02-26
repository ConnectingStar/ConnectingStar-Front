import { useNavigate } from "react-router-dom";

import Modal from "@/components/common/Modal/Modal";
import { HabitsElement } from "@/types/homeTypes";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { habitCheckModalStyle } from "@/components/Home/HabitCheckModal/HabitCheckModal.style";

interface ModalProps {
	modalTarget: HabitsElement | null;
}

enum NavigateTo {
	REST = "/restrecord",
	CHECK = "/habitrecord",
}

function HabitCheckModal({ modalTarget }: ModalProps) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleNavOptions = (option: NavigateTo | null) => {
		dispatch(closeModal());
		if (option) {
			navigate({ pathname: `${option}`, search: `?key=${modalTarget?.key}` });
		}
	};

	return (
		<Modal>
			<section css={habitCheckModalStyle.modalWrapper}>
				<span css={habitCheckModalStyle.modalTitle}>아래의 습관을 실천하였나요?</span>
				<span css={habitCheckModalStyle.articleWrapper}>{modalTarget?.article}</span>
				<div css={habitCheckModalStyle.buttonWrapper}>
					<span
						className="deactivated"
						css={habitCheckModalStyle.button}
						onClick={() => handleNavOptions(null)}
					>
						초기화
					</span>
					<span
						className="deactivated"
						css={habitCheckModalStyle.button}
						onClick={() => handleNavOptions(NavigateTo.REST)}
					>
						쉬는 날
					</span>
					<span
						className="activated"
						css={habitCheckModalStyle.button}
						onClick={() => handleNavOptions(NavigateTo.CHECK)}
					>
						실천 완료
					</span>
				</div>
			</section>
		</Modal>
	);
}

export default HabitCheckModal;
