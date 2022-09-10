// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// // import generateToken from "../../utils/Token";
// import { setCookie, removeCookie } from "react-cookie";

// // url
// const REACT_APP_SIGNUP_URL = `http://15.164.224.94/api/member/signup`;
// const REACT_APP_LOGIN_URL = `http://15.164.224.94/api/member/login`;

// // initialState
// const initialState = {
//   users: [],
//   isLoading: false,
//   error: null,
// };

// // redux-thunk
// // login
// export const __login = createAsyncThunk("login", async (payload, thunkAPI) => {
//   try {
//     const response = await axios.post(REACT_APP_LOGIN_URL, payload);
//     const data = response.data;
//     if (response.data.success) {
//       const access_token = response.headers["authorization"];
//       const refresh_token = response.headers["refresh-token"];
//       setCookie("access_token", access_token);
//       setCookie("refresh_token", refresh_token);
//       return thunkAPI.fulfillWithValue(data);
//     } else {
//       return thunkAPI.rejectWithValue("error");
//     }
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });

// // [회원가입]
// export const __join = createAsyncThunk("createUsers", async (newUser, thunkAPI) => {
//   try {
//     const { data } = await axios.post(REACT_APP_SIGNUP_URL, newUser);
//     return thunkAPI.fulfillWithValue(data);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });

// //[로그아웃]
// export const __logoutUsers = createAsyncThunk(
//   "logoutUsers",
//   async (payload, thunkAPI) => {
//     try {
//       const access = getCookie("access_token");
//       const refresh = getCookie("refresh_token");

//       axios.defaults.headers.common["authorization"] = access;
//       axios.defaults.headers.common["refresh-token"] = refresh;

//       const response = await axios.post(REACT_APP_API_LOGOUT_URL);
//       removeCookie("access_token");
//       removeCookie("refresh_token");
//       return thunkAPI.fulfillWithValue(response.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// //createSlice
// export const users = createSlice({
//   name: "users",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [__createUsers.pending]: (state, action) => {
//       state.isLoding = true; // 네트워크 요청 시작시, 로딩 상태를 true로 변경
//     },
//     // fulfill
//     [__getUser.fulfilled]: (state, action) => {
//       state.isLoding = true;
//       state.users = state.users.concat({ userId: action.payload[1] });
//     },
//     [__doubleCheck.fulfilled]: (state, action) => {
//       state.isLoding = true;
//     },
//     [__createUsers.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.users = state.users.concat({
//         id: action.payload.id,
//         userId: action.payload.userId,
//         nickName: action.payload.nickName,
//       });
//     },
//     [__login.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.users = state.users.concat({
//         id: action.payload.id,
//         userId: action.payload.userId,
//       });
//     },
//     [__logoutUsers.fulfilled]: (state, action) => {
//       state.isLoding = true;
//     },
//     // reject
//     [__createUsers.rejected]: (state, action) => {
//       state.isLoading = false;
//     },
//     [__getUser.rejected]: (state, action) => {
//       state.isLoading = false;
//     },
//     [__doubleCheck.rejected]: (state, action) => {
//       state.isLoading = false;
//     },
//     [__logoutUsers.rejected]: (state, action) => {
//       state.isLoading = false;
//     },
//   },
// });

// // export
// export const {} = users.actions;
// export default users.reducer;
