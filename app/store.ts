import { combineReducers, configureStore } from '@reduxjs/toolkit';
import colorReducer from '../redux/color/colorSlice';
import modeReducer from '../redux/mode/modeSlice';

const rootReducer =  combineReducers({
    mode: modeReducer,
    color: colorReducer,
})

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;