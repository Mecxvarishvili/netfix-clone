import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FocusCardState } from "../../components/types";


const initialState: Partial<FocusCardState> = {}
const FocusCardSlice = createSlice({
    name: "focusCard",
    initialState,
    reducers: {
        setFocusCard: (state, action: PayloadAction<FocusCardState>) => {
            return action.payload
        },
        disableFocusCard: () => {
            return {}
        }
    }
})

export default FocusCardSlice.reducer
export const { setFocusCard, disableFocusCard } = FocusCardSlice.actions