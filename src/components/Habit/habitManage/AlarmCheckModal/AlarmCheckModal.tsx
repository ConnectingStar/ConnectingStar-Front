import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { theme } from "@/styles/theme";

interface AlarmCheckModalProps {
	alarmTarget: string;
}

function AlarmCheckModal({ alarmTarget }: AlarmCheckModalProps) {
	const dispatch = useAppDispatch();

	console.log(alarmTarget);

	const handleAlarmOff = () => {
		// alarm target -> first, second에 맞춰서 끄는 api 연결
		dispatch(closeModal());
	};

	return (
		<Modal>
			<div css={layoutStyle}>
				<div>
					<p>알림을 off 하면 저와의 약속을 잊으실까 걱정돼요 😥</p>
					<p>괜찮으시다면 제가 계속 도움이 되어드리고 싶어요</p>
					<p>알림을 유지하시겠어요?</p>
				</div>
				<FooterBtn
					leftText="알림 끄기"
					text="알림 유지"
					isPositionStatic
					isTransparent
					handleLeftBtnClick={handleAlarmOff}
					handleBtnClick={() => {
						dispatch(closeModal());
					}}
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

	& > div:first-of-type {
		display: flex;
		flex-direction: column;
		gap: 20px;

		& > p:last-of-type {
			${theme.font.body_a_bold};
		}
	}
`;
