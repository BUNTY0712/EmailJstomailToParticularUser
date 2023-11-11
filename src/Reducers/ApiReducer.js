import { axiosInstance } from "../Axios";
const { createSlice } = require("@reduxjs/toolkit");

const ApiReducer = createSlice({
	name: "customerapi",
	initialState: {
		success: "false",
		loading: "false",
		login: null,
	},
	reducers: {
		loginRequest(state, action) {
			state.loading = true;
		},
		loginSuccess(state, action) {
			state.success = true;
			state.loading = false;
			state.login = action.payload;
			state.error = null;
		},
		loginFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});
const { actions } = ApiReducer;
export const { loginRequest, loginSuccess, loginFail } = actions;

export const loginDispatch = (bodyData, navigate) => async (dispatch) => {
	try {
		dispatch(loginRequest());
		const { data } = await axiosInstance?.post("/api/login", bodyData);
		dispatch(loginSuccess(data));
		// console.log("data", data.status);
		if (data.status) {
			navigate("/dashboard");
		} else {
			alert("Invalid username");
		}
	} catch (error) {
		dispatch(
			loginFail(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			)
		);
	}
};

export default ApiReducer;
