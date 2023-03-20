import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import FocusCardSlice from "./focusCard/focusCardSlice";


export const store = configureStore({
    reducer: {
        focusCard: FocusCardSlice
    }
})

export default store;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;