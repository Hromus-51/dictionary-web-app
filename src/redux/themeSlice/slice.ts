import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

export interface themeState {
    theme: string,
    font: string
}

const initialState: themeState = {
    theme: 'light',
    font: 'Sans Serif'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<string>) {
            state.theme = action.payload;
        },
        setFont(state, action: PayloadAction<string>) {
            state.font = action.payload;
        }
    }
})

export const selectTheme = (state: RootState) => state.themeReducer.theme;
export const selectFont = (state: RootState) => state.themeReducer.font;

export const { setTheme, setFont } = themeSlice.actions;
export default themeSlice.reducer;