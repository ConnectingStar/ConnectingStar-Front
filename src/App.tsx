import { Route, Routes, BrowserRouter } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
