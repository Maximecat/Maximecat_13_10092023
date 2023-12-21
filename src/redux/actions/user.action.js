import { createAsyncThunk } from "@reduxjs/toolkit"
import { getUser, updateUser } from "../../utils/services/ApiService";


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

const updateAction = createAsyncThunk(
    'user/update',
    async ({ token, firstName, lastName }, thunkApi) => {
        const res = await updateUser(token, { firstName, lastName })
        if (res.status === 200) {
            console.log('update reussi', token, { firstName, lastName })
            return res.body
        } else {
            console.log('update raté', token, { firstName, lastName })
            return thunkApi.rejectWithValue(res.message)
        }
    }
)

export { fetchAction, updateAction }