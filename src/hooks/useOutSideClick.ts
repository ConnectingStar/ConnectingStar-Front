import { useEffect } from "react";

const useOutSideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
	const handleClick = (e: MouseEvent) => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			callback();
		}
	};

	useEffect(() => {
		window.addEventListener("mousedown", handleClick);
		return () => {
			window.removeEventListener("mousedown", handleClick);
		};
	}, []);
};

export default useOutSideClick;
