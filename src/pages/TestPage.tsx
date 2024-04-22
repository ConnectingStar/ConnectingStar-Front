import { useToast } from "@/hooks/useToast";

const TestPage = () => {
	const { createToast } = useToast();

	return (
		<div>
			<button onClick={() => createToast("토스트 테스트")}>toast test</button>
		</div>
	);
};

export default TestPage;
