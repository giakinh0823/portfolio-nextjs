import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface ModeState {
    mode: string;
}

const initialState: ModeState = {
    mode: "light",
};


const modeSlice = createSlice({
    name: 'mode',
    initialState: initialState,
    reducers: {
        getMode(state){
            state.mode = localStorage.getItem('mode') || 'light';
        },
        dark(state) {
           state.mode = 'dark';
           localStorage.setItem('mode', 'dark');
        },
        light(state) {
            state.mode = 'light';
            localStorage.setItem('mode', 'light');
        },
    }
})

export const modeAction = modeSlice.actions;

//selectors
export const selectMode = (state: RootState) => state.mode.mode;

const modeReducer = modeSlice.reducer;
export default modeReducer