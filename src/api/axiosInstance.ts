import axios from "axios";

import { BASE_URL } from "@/constants/api";

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 3000,
	// 원래 true임 fcm 테스트시 미인증 상태라 false로 해놓음
	withCredentials: false,
});

// 토큰 체크, 에러 코드 interceptors 추가 예정
