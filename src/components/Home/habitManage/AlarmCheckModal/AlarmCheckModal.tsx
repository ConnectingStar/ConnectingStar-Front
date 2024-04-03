import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { theme } from "@/styles/theme";

interface Alarms {
	target: string;
	alarm: { first: boolean; second: boolean };
	setAlarm: React.Dispatch<React.SetStateAction<{ first: boolean; second: boolean }>>;
}

function AlarmCheckModal({ target, alarm, setAlarm }: Alarms) {
	const dispatch = useAppDispatch();
	const handleAlarmCheck = (check: boolean) => {
		setAlarm({ ...alarm, [target]: check });
		dispatch(closeModal());
	};

	return (
		<Modal>
			<div css={layoutStyle}>
				<div>
					<p>{`알림을 off 하면 저와의 약속을 잊으실까 걱정돼요 😥`}</p>
					<p>{`괜찮으시다면 제가 계속 도움이 되어드리고 싶어요`}</p>
					<h1>{`알림을 유지하시겠어요?`}</h1>
				</div>
				<FooterBtn
					leftText="알림 끄기"
					text="알림 유지"
					isPositionStatic
					isTransparent
					handleLeftBtnClick={() => handleAlarmCheck(false)}
					handleBtnClick={() => handleAlarmCheck(true)}
				/>
			</div>
		</Modal>
	);
}

export default AlarmCheckModal;

const layoutStyle = css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0.9375rem;
	border-radius: 15px;
	width: 18rem;
	height: 18rem;
	background-color: white;
	white-space: pre-wrap;
	${theme.font.body_a};

	h1 {
		${theme.font.body_a_bold};
	}
	& > div:first-of-type {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
`;
