import React from "react";
import ReactDOM from "react-dom/client";

import { Global } from "@emotion/react";

import { GlobalStyle } from "@/abc/abc";
import App from "@/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Global styles={GlobalStyle} />
		<App />
	</React.StrictMode>,
);
