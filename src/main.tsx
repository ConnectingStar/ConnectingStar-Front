import React from "react";
import ReactDOM from "react-dom/client";

import { Global } from "@emotion/react";

import App from "@/App";
import { GlobalStyle } from "@/styles/globalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Global styles={GlobalStyle} />
		<App />
	</React.StrictMode>,
);
