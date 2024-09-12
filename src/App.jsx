import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index path='/' element={<Login />} />
					<Route path='/Profile' element={<Profile />} />
					<Route path='/Explore' element={<Explore />} />
					<Route path='/Home' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
