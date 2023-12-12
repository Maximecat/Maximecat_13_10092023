import { createAsyncThunk } from "@reduxjs/toolkit"
import { getUser } from "../../utils/services/ApiService";


const fetchAction = createAsyncThunk(
    'user/fetch',
    async ({ token }, thunkApi) => {
        const res = await getUser(token)
        if (res.status === 200) {
            console.log('fetch reussi', token)
            return res.body
        } else {
            console.log('fetch raté', token)
            return thunkApi.rejectWithValue(res.message)
        }
    }
)

export { fetchAction }