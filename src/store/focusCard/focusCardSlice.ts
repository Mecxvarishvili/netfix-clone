import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
    data: object,
}
const initialState: State = {
    data: {}
}
const FocusCardSlice = createSlice({
    name: "focusCard",
    initialState,
    reducers: {
        setFocusCard: (state, action: PayloadAction<object>) => {
            state.data = action.payload
        }
    }
})

export default FocusCardSlice.reducer
export const { setFocusCard } = FocusCardSlice.actions