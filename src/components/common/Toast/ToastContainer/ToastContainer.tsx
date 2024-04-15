import Toast from "@/components/common/Toast/Toast";

import { useAppSelector } from "@/api/hooks";

const ToastContainer = () => {
	const { toastList } = useAppSelector((state) => state.toast);

	return (
		toastList.length > 0 && (
			<>
				{toastList.map(({ id, message, ...attributes }) => (
					<Toast key={id} {...attributes}>
						{message}
					</Toast>
				))}
			</>
		)
	);
};

export default ToastContainer;
