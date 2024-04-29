import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import axios from "axios";

import { login } from "@/api/auth/authSlice";
import { useAppDispatch } from "@/api/hooks";

import { END_POINTS } from "@/constants/api";

// 해당 페이지에서 이미 회원가입이 된 유저면 서버단에서는 현재 보이는 에러 페이지가 아니라 리다이렉트를 home으로 시켜줘야합니다.

function KakaoLoginPage() {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const [searchParams] = useSearchParams();

	const authCode = searchParams.get("code");

	const fetchAccessToken = async (authCode: string) => {
		try {
			// api 주소 삭제 및 constants 처리
			const response = await axios.post(
				END_POINTS.LOGIN(authCode),
				{},
				{ withCredentials: true, headers: { "Content-Type": "application/json" } },
			);

			if (response.status === 200) {
				dispatch(login());

				navigate("/onboarding?step=CreateAccount");
			}

			// 불필요 코드 url이 서버단이기 때문에 어차피 작동을 안합니다 확인하시면 지워주세요
			// if (response.status === 403) {
			// 	navigate("/");
			// }
		} catch (error) {
			// 에러날 가능성이 없지만 에러시 소셜 로그인 버튼 페이지로 이동
			navigate("/onboarding?step=OauthSignUp");

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
