import { createAsyncThunk } from "@reduxjs/toolkit"
import { login } from "../../utils/services/ApiService";

const loginAction = createAsyncThunk(
    'auth/login',
    async ({ email, password }, thunkApi) => {
        const res = await login(email, password)
        if (res.status === 200) {
            console.log('reussite', email, password)
            return res.body
        } else {
            console.log('echec', email, password)
            return thunkApi.rejectWithValue(res.message)
        }
    }
);

export { loginAction }