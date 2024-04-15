import { useState } from "react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import TimePicker from "@/components/common/Modal/CommonModal/SelectTimeModal/TimePicker/TimePicker";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { NOON_LIST, HOUR_LIST, MINUTE_LIST } from "@/constants/time";

import {
	footerBtnBoxStyle,
	layoutStyle,
	timeBoxStyle,
} from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal.style";

function SelectTimeModal() {
	const dispatch = useAppDispatch();

	const [selectedClock, setSelectedClock] = useState({ noon: "오전", time: "01", minute: "00" });

	const onSelectedChange = (type: string) => (target: string | number) => {
		setSelectedClock({ ...selectedClock, [type]: target });
	};

	const handleSelectClick = () => {
		dispatch(closeModal());

		console.log(selectedClock);
	};

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>시간을 선택해 주세요</h1>

				<div css={timeBoxStyle}>
					<div className="noonBox">
						<TimePicker list={NOON_LIST} onSelectedChange={onSelectedChange("noon")} />
					</div>

					<div className="timeBox">
						<TimePicker list={HOUR_LIST} onSelectedChange={onSelectedChange("time")} />
						<p>:</p>
						<TimePicker list={MINUTE_LIST} onSelectedChange={onSelectedChange("minute")} />
					</div>
				</div>

				<div css={footerBtnBoxStyle}>
					<FooterBtn
						leftText="취소"
						text="선택"
						handleLeftBtnClick={() => dispatch(closeModal())}
						handleBtnClick={handleSelectClick}
						isPositionStatic
					/>
				</div>
			</div>
		</Modal>
	);
}

export default SelectTimeModal;
