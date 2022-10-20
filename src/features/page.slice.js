import { createSlice } from "@reduxjs/toolkit";


// State //
const initialState = {
    home: false,
    about: false,
    skills: false,
    work: false,
    contact: false
}

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
    },
})

// Actions // 

// Reducer //
export const pageReducer = pageSlice.reducer



