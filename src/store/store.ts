import { configureStore } from "@reduxjs/toolkit";
import FocusCardSlice from "./focusCard/focusCardSlice";


export const store = configureStore({
    reducer: {
        focusCard: FocusCardSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch