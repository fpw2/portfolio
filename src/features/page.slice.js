import { createSlice } from "@reduxjs/toolkit";


// State //
const initialState = {
    hoverWork: false
}

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        hover: (state) => {
            state.hoverWork = true
        }
    },
})

// Actions // 
export const { hover } = pageSlice.actions

// Reducer //
export const pageReducer = pageSlice.reducer



