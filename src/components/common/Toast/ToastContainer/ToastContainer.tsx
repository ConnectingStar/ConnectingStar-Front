import Toast from "@/components/common/Toast/Toast";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { deleteToast } from "@/api/toast/toastSlice";

const ToastContainer = () => {
	const dispatch = useAppDispatch();

	const { toastList } = useAppSelector((state) => state.toast);

	return (
		toastList.length > 0 && (
			<>
				{toastList.map(({ id, message, ...attributes }) => (
					<Toast key={id} onClose={() => dispatch(deleteToast(id))} {...attributes}>
						{message}
					</Toast>
				))}
			</>
		)
	);
};

export default ToastContainer;
