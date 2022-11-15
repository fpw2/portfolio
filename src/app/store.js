import { configureStore } from "@reduxjs/toolkit"
import { pageReducer } from "../features/page.slice"

// devtools redux
const store = configureStore({
    reducer: {
        page: pageReducer,
    }
})

// Display the new state in the console //
store.subscribe(() => {
    const newState = store.getState();
    console.log("New state", newState);
});

export { store }
