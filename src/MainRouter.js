import React from "react";
import NavBar from "./ResuableComponent/NavBar";
import LoginForm from "./Forms/LoginForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import RegistrationForm from "./Forms/RegistrationForm";

const MainRouter = () => {
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<LoginForm />} />

					<Route path="/register" element={<RegistrationForm />} />

					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</Router>
		</>
	);
};

export default MainRouter;
