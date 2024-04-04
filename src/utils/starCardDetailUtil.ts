import { modalType } from "@/constants/modalConstants";

export function getModalType(state: string) {
	if (state === "default") {
		return modalType.SELECT_STAR;
	}

	if (state === "have") {
		return modalType.SELECT_PROFILE_CHARACTER;
	}
}
