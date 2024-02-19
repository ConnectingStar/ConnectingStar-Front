import { useMemo } from "react";
import { createPortal } from "react-dom";

interface portalType {
	children: React.ReactNode;
	elementId: string;
}

const Portal = ({ children, elementId }: portalType) => {
	const rootElement = useMemo(() => document.getElementById(elementId), [elementId]);

	return createPortal(children, rootElement as HTMLElement);
};

export default Portal;
