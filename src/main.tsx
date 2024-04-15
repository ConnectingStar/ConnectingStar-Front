import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { Global, ThemeProvider } from "@emotion/react";

import App from "@/App";
import ToastContainer from "@/components/common/Toast/ToastContainer/ToastContainer";

import { store } from "@/api/store";

import { GlobalStyle } from "@/styles/globalStyle";
import { theme } from "@/styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Global styles={GlobalStyle} />
				<App />
				<ToastContainer />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);
