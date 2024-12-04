import { useSocialLogin } from "@/hooks/useSocialLogin";

const GoogleLoginPage = () => {
	useSocialLogin({ socialType: "G" });

	return <div />;
};

export default GoogleLoginPage;
