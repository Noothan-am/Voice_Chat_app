import React from "react";
import './app.css'
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Activate from "./containers/Activate";
const isAuth = false;
const isVerified = false;
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* first it checks isauth if authenticated then renders activate compnentent  */}
				<Route path="/activate" element={isAuth ? <Activate /> : <Navigate to="/register" />} />
				{/* first it checks isauth if registered then renders activate compnentent  */}
				<Route path="/register" element={isAuth ? <Navigate to="/activate" /> : <Register />} />
				{/* first it checks isauth and isverified if registered and authenticated then renders rooms compnentent otherwise renders register or activate comopnent  */}
				<Route path="/room" element={isAuth && isVerified ? <Navigate to="/room" /> : isAuth && !isVerified ? <Navigate to="/register" /> : <Navigate to="/register" />} />
			</Routes>
		</>
	);
}

export default App;
