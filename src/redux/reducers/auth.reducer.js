import { createSlice } from "@reduxjs/toolkit";
import { loginAction, logoutAction } from "../actions/auth.action";

const initialState = {
    rememberMe: false,
    errorMessage: "",
    loading: false,
    token: window.localStorage.getItem("token") || ""
};

const authSlice = createSlice({
    initialState,
    name: "authState",
    extraReducers(builder) {
        builder
            .addCase(loginAction.pending, (state) => {
                console.log("pending");
                state.loading = true
                console.log({ ...state });
            })
            .addCase(loginAction.fulfilled, (state, action) => {
                console.log("fulfilled");
                if (action.payload.rememberMe) {
                    window.localStorage.setItem("token", action.payload.body.token)
                }
                state.errorMessage = ""
                state.loading = false
                state.token = action.payload.body.token
                console.log({ ...state });
            })
            .addCase(loginAction.rejected, (state, action) => {
                console.log("rejected");
                state.errorMessage = action.payload
                state.loading = false
                console.log({ ...state });
            })
            .addCase(logoutAction, (state, action) => {
                state.token = ""
                window.localStorage.clear()
            })
    }
})

export default authSlice.reducer