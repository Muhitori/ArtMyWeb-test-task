import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SnackbarGenerator } from "./SnackbarGenerator";
import { Home } from "./Home";
import { Edit } from "./Edit";
import { MAX_SNACK } from "../utils/constants";

const App = () => {
	return (
		<BrowserRouter>
			<SnackbarProvider maxSnack={MAX_SNACK}>
				<SnackbarGenerator />
				<CssBaseline />
				<Routes>
					<Route index path='users' element={<Home />} />
					<Route path='edit' element={<Edit />} />
					<Route path='*' element={<Navigate to='users' replace />} />
				</Routes>
			</SnackbarProvider>
		</BrowserRouter>
	);
};

export default App;
