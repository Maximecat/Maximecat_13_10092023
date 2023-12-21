import { createSlice } from "@reduxjs/toolkit";
import { fetchAction, updateAction } from "../actions/user.action";

const initialState = {
    firstName: "",
    lastName: "",
    errorMessage: ""
};

const userSlice = createSlice({
    initialState,
    name: "userState",
    extraReducers(builder) {
        builder
            .addCase(fetchAction.pending, (state) => {
                console.log("pending");
                console.log({ ...state });
            })
            .addCase(fetchAction.fulfilled, (state, action) => {
                console.log("fulfilled");
                console.log(action.payload)
                state.firstName = action.payload.firstName
                state.lastName = action.payload.lastName
                state.errorMessage = ""
                console.log({ ...state });
            })
            .addCase(fetchAction.rejected, (state, action) => {
                console.log("rejected");
                state.errorMessage = action.payload
                console.log({ ...state });
            })
            .addCase(updateAction.pending, (state) => {
                console.log("pending");
                console.log({ ...state });
            })
            .addCase(updateAction.fulfilled, (state, action) => {
                console.log("fulfilled");
                console.log(action.payload)
                state.firstName = action.payload.firstName
                state.lastName = action.payload.lastName
                state.errorMessage = ""
                console.log({ ...state });
            })
            .addCase(updateAction.rejected, (state, action) => {
                console.log("rejected");
                state.errorMessage = action.payload
                console.log({ ...state });
            })
    }
})

export default userSlice.reducer;