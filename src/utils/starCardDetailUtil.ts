import { StarCardDetailStatus } from "@/types/star";

import { modalType } from "@/constants/modalConstants";

export function getModalType(state: StarCardDetailStatus) {
	if (state === "SELECT") {
		return modalType.SELECT_STAR;
	}

	if (state === "COMPLETE") {
		return modalType.SELECT_PROFILE_CHARACTER;
	}
}
