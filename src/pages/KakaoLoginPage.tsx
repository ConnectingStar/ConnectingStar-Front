import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { axiosInstance } from "@/api/axiosInstance";

function KakaoLoginPage() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const authCode = searchParams.get("code");

	useEffect(() => {
		if (authCode !== null) {
			fetchAccessToken(authCode);
		}
	}, [authCode]);

	const fetchAccessToken = async (authCode: string) => {
		const tokenUrl = `/oauth/login?socialType=K&authCode=${authCode}`;
		//TODO: firstVisit대신 나중에 백엔드에서 DB 보냄
		const firstVisit = localStorage.getItem("First visit");
		try {
			const response = await axiosInstance.post(tokenUrl);
			if (response.status === 200) {
				firstVisit === "false" && navigate("/");
				navigate("/onboarding?step=CreateAccount");
			}
			// TODO: 나중에 수정 예정
			if (response.status === 403) {
				navigate("/");
			}
		} catch (error) {
			console.error("error fetching access token:", error);
		}
	};

	return <div></div>;
}

export default KakaoLoginPage;
