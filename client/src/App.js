import React from "react";
import './app.css'
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Room from "./containers/Room";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Name from './components/Name'
import Username from './components/Username'
import Photo from './components/Photo'
import Otp from './components/Otp'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/otp" element={<Otp />} />
				<Route path="/name" element={<Name />} />
				<Route path="/username" element={<Username />} />
				<Route path="/photo" element={<Photo />} />
			</Routes>
		</>
	);
}

export default App;
