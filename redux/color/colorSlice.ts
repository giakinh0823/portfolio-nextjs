import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface ColorState {
    color: string;
}

const initialState: ColorState = {
    color: "#3766f4",
};


const colorSlice = createSlice({
    name: 'color',
    initialState: initialState,
    reducers: {
        getColor(state){
            state.color = localStorage.getItem('color') || '#3766f4';
        },
        changeColor(state: any, action: PayloadAction<string>) {
           state.color = action.payload;
           localStorage.setItem('color', action.payload);
        },
    }
})

export const colorAction = colorSlice.actions;

//selectors
export const selectColor = (state: RootState) => state.color.color;

const colorReducer = colorSlice.reducer;
export default colorReducer