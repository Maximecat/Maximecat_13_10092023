import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { login } from "../../utils/services/ApiService";

const loginAction = createAsyncThunk(
    'auth/login',
    async ({ email, password }) => {
        console.log('coucou', email, password)
        const res = await login(email, password)
    }
);

const logoutAction = createAction('auth/logout');

export { loginAction, logoutAction }