import { useSocialLogin } from "@/hooks/useSocialLogin";

function KakaoLoginPage() {
	useSocialLogin({ socialType: "K" });

	return <div />;
}

export default KakaoLoginPage;
