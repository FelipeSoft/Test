import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../redux/reducers/UserReducer";
import ThemeReducer from "./reducers/ThemeReducer";

export const store = configureStore({
    reducer: {
        user: UserReducer,
        theme: ThemeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;