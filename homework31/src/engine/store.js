import { configureStore } from "@reduxjs/toolkit";
import { counter } from "../components/Counter/slice";
import todoReducer from "../components/Todo/todoSlice";

export const store = configureStore({
    reducer: {
        counter,
        todos: todoReducer
    }
})