import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		phoneno: "",
	});
	const [loginAttempts, setLoginAttempts] = useState(0);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const [message, setMessage] = useState("");

	const [countdown, setCountdown] = useState(30);
	const handleSubmit = async () => {
		// Check if either username or password is empty
		if (
			formData.username === "" ||
			formData.email === "" ||
			formData.password === "" ||
			formData.phoneno === ""
		) {
			// alert("Please fill in both username and password");
			setMessage("Please fill in both username and password");
			return;
		}

		const form = new FormData();
		form.append("username", formData.username);
		form.append("email", formData.email);
		form.append("password", formData.password);
		form.append("phoneno", formData.phoneno);

		try {
			const response = await fetch("http://localhost:8000/api/register", {
				method: "POST",
				body: form,
			});

			if (response.ok) {
				const responseData = await response.json();
				console.log("responseDatalogin", responseData.status);
				if (responseData.status) {
					alert("Registration Succefully");
					navigate("/login");
				}
			} else {
				alert("Login unsuccessful");
				setLoginAttempts((prevAttempts) => prevAttempts + 1);
			}
		} catch (error) {
			console.error("An error occurred while logging", error);
			// setError("Please Enter Valid Information");
		}
	};

	return (
		<>
			<Grid
				style={{
					backgroundSize: "100%",
					background: "black",

					height: "100vh",
				}}
				container
			>
				<Grid
					style={{
						marginTop: "25px",
						padding: "20px",
						color: "white",
						boxShadow: "0 0 5px",
					}}
					item
					lg={5}
					mx="auto"
				>
					<Box>
						<Box mt={5}>
							<h3> User Registration Form</h3>
						</Box>
						{/* UserName  */}
						<Box mt={2}>
							<h5>UserName</h5>
						</Box>
						<Box>
							<input
								className="form-control"
								placeholder="Enter your Email"
								type="text"
								onChange={(e) =>
									setFormData({ ...formData, username: e.target.value })
								}
								value={formData.username}
							/>
						</Box>
						{/* Email  */}
						<Box mt={2}>
							<h5>Email</h5>
						</Box>
						<Box>
							<input
								className="form-control"
								placeholder="Enter your Email"
								type="text"
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								value={formData.email}
							/>
						</Box>
						{/* Password  */}
						<Box mt={2}>
							<h5>Password</h5>
						</Box>
						<Box>
							<input
								className="form-control"
								placeholder="Enter your Password"
								type="password"
								onChange={(e) =>
									setFormData({ ...formData, password: e.target.value })
								}
								value={formData.password}
							/>
						</Box>
						{/* phone No  */}
						<Box mt={2}>
							<h5>Phone No</h5>
						</Box>
						<Box>
							<input
								className="form-control"
								placeholder="Enter Phone Number"
								type="number"
								onChange={(e) =>
									setFormData({ ...formData, phoneno: e.target.value })
								}
								value={formData.phoneno}
							/>
						</Box>
						<Box
							mt={2}
							style={{ display: "flex", justifyContent: "flex-end" }}
						></Box>
						<Box
							onClick={() => {
								if (!isButtonDisabled) {
									handleSubmit();
								}
							}}
							mt={2}
							style={{
								textAlign: "center",
								cursor: !isButtonDisabled ? "pointer" : "not-allowed",
							}}
							className={`form-control btn-dark ${
								!isButtonDisabled ? "" : "disabled"
							}`}
						>
							{isButtonDisabled ? `Try again in ${countdown}s` : "Submit"}
						</Box>
						{formData.username === "" ||
						formData.email === "" ||
						formData.password === "" ||
						formData.phoneno === ""
							? message
							: ""}
					</Box>
				</Grid>
				<Grid item lg={6} mx="auto">
					<Box mt={3}></Box>
				</Grid>
			</Grid>
		</>
	);
};

export default RegistrationForm;
