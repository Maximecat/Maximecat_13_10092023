import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { login } from "../../utils/services/ApiService";

const loginAction = createAsyncThunk(
    'auth/login',
    async ({ email, password, rememberMe }, thunkApi) => {
        const res = await login(email, password)
        if (res.status === 200) {
            return { body: res.body, rememberMe }
        } else {
            return thunkApi.rejectWithValue(res.message)
        }
    }
);

const logoutAction = createAction('auth/logout')

export { loginAction, logoutAction }