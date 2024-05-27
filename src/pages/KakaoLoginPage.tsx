import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { logIn } from "@/api/auth/authThunk";
import { useAppDispatch } from "@/api/hooks";

function KakaoLoginPage() {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const [searchParams] = useSearchParams();

	const authCode = searchParams.get("code");

	const handleLogin = async (authCode: string) => {
		try {
			await dispatch(logIn(authCode)).unwrap();
			navigate("/onboarding?step=create-account");
		} catch (error) {
			console.log(error);
			navigate("/onboarding?step=oauth-sign-up");
		}
	};

	useEffect(() => {
		if (authCode !== null) {
			handleLogin(authCode);
		}
	}, [authCode]);

	return <div />;
}

export default KakaoLoginPage;
