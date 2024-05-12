import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import axios from "axios";

import { login } from "@/api/auth/authSlice";
import { useAppDispatch } from "@/api/hooks";

import { END_POINTS } from "@/constants/api";

function KakaoLoginPage() {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const [searchParams] = useSearchParams();

	const authCode = searchParams.get("code");

	const fetchAccessToken = async (authCode: string) => {
		try {
			const response = await axios.post(
				END_POINTS.LOGIN(authCode),
				{},
				{ withCredentials: true, headers: { "Content-Type": "application/json" } },
			);

			if (response.status === 200) {
				dispatch(login());

				navigate("/onboarding?step=create-account");
			}
		} catch (error) {
			navigate("/onboarding?step=oauth-sign-up");

			console.error(error);
		}
	};

	useEffect(() => {
		if (authCode !== null) {
			fetchAccessToken(authCode);
		}
	}, [authCode]);

	return <div />;
}

export default KakaoLoginPage;
