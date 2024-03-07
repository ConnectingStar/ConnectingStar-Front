import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { layoutStyle } from "@/components/Home/habitManage/AlarmCheckModal/AlarmCheckModal.style";

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
				<article>
					<p>{`알림을 off 하면 저와의 약속을 잊으실까 걱정돼요 😥`}</p>
					<p>{`괜찮으시다면 제가 계속 도움이 되어드리고 싶어요`}</p>
					<h1>{`알림을 유지하시겠어요?`}</h1>
				</article>
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
