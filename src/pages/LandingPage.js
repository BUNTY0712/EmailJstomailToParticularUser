import { Box, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
	const navigate = useNavigate();
	return (
		<>
			<Grid container>
				<Grid item lg={3} mx="auto">
					<Box mt={4}>
						<h2>Welcome To Dashboard </h2>
					</Box>

					<Box mt={4} style={{ display: "flex", justifyContent: "center" }}>
						<Box>
							<button
								className="btn btn-dark"
								onClick={() => navigate("/login")}
							>
								Login
							</button>
						</Box>
						<Box ml={4}>
							<button
								className="btn btn-dark"
								onClick={() => navigate("/register")}
							>
								SingUp
							</button>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default LandingPage;
