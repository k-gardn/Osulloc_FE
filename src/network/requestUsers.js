// import { instance } from "./request";
// import { useCookies } from "react-cookie";

// export const login = async () => {
//   const res = await instance.post(`/api/member/login`, {
//     email: "",
//     password: "",
//   });
//   return res.data.isSuccess ? res.data.data : res.data.error;
// };

// authorization: Bearer token_value
// refresh-token: token_value

// login
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
