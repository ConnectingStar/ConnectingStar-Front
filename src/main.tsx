import React from "react";
import ReactDOM from "react-dom/client";

import { Global, ThemeProvider } from "@emotion/react";

import App from "@/App";
import { GlobalStyle } from "@/styles/globalStyle";
import { theme } from "@/styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Global styles={GlobalStyle} />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
