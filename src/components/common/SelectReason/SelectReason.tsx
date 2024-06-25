import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import SelectReasonModal from "@/components/common/SelectReason/SelectReasonModal/SelectReasonModal";

import { withdrawal } from "@/api/auth/authThunk";
import { deleteHabit } from "@/api/habit/habitThunk";
import { useAppSelector, useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";
import { getUserInfo } from "@/api/user/userThunk";

import { ACCESS_TOKEN_KEY } from "@/constants/api";
import { modalType } from "@/constants/modalConstants";
import { ONBOARDING_STEP, STEP_KEY } from "@/constants/onboarding";
import { PATH } from "@/constants/path";

import { dateFormat } from "@/utils/dateFormat";

import {
	layoutStyle,
	getReasonBoxStyle,
	middleBoxStyle,
	textBoxStyle,
	subTextBoxStyle,
} from "@/components/common/SelectReason/SelectReason.style";

interface SelectReasonProps {
	title: string;
	reasonDefaultText: string;
	selectData: (
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
	footerBtnText: string;
}

const SelectReason = ({
	title,
	reasonDefaultText,
	selectData,
	footerBtnText,
}: SelectReasonProps) => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);
	const { userData } = useAppSelector((state) => state.user);

	const navigate = useNavigate();

	const param = useParams();

	const [reason, setReason] = useState(reasonDefaultText);
	const [content, setContent] = useState("");

	const deletedDt = dateFormat(new Date(), "LINE");

	const handleWithDrawal = async () => {
		try {
			await dispatch(withdrawal({ reason, content, deletedDt })).unwrap();
			localStorage.removeItem(ACCESS_TOKEN_KEY);
			navigate(`${PATH.ONBOARDING}?${STEP_KEY}=${ONBOARDING_STEP.OAUTH_SIGN_UP}`);
		} catch (error) {
			console.error(error);
		}
	};

	const handleDeleteHabit = async () => {
		try {
			await dispatch(deleteHabit({ runHabitId: param.habitId, reason })).unwrap();
			navigate(PATH.HOME);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		dispatch(getUserInfo());
	}, []);

	return (
		<div css={layoutStyle}>
			<h1>{title}</h1>
			<div
				css={getReasonBoxStyle(reason !== reasonDefaultText)}
				onClick={() => dispatch(openModal(modalType.SELECT_REASON))}
			>
				<p>{reason}</p>
				<DownArrowIcon />
			</div>

			{selectData.map((data) => (
				<div key={data.title} css={middleBoxStyle}>
					{data.placeholder && data.title === reason && (
						<div css={textBoxStyle}>
							<textarea
								placeholder={data.placeholder}
								value={content}
								onChange={(e) => setContent(e.target.value)}
							/>
						</div>
					)}

					{data.title === reason && (
						<div css={subTextBoxStyle}>
							<p>{data.subText}</p>
							<p>
								{data.title === "습관이 완전히 자리 잡았어요" &&
									`벌써 ${userData.nickname}님과의 다음 약속이 기대되네요 :)`}
							</p>
						</div>
					)}
				</div>
			))}

			<FooterBtn
				text={footerBtnText}
				isTransparent
				disabled={reason === reasonDefaultText}
				handleBtnClick={param.habitId ? handleDeleteHabit : handleWithDrawal}
			/>

			{modal === modalType.SELECT_REASON && (
				<SelectReasonModal
					changeReason={setReason}
					reasonData={selectData}
					reasonDefaultText={reasonDefaultText}
				/>
			)}
		</div>
	);
};

export default SelectReason;
