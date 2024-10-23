import { configureStore } from '@reduxjs/toolkit' 
import todosReducer from '../reducer/todo';
export const store = configureStore({
    reducer : todosReducer
});

