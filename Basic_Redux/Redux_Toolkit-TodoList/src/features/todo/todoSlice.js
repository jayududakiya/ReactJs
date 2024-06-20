import { createSlice , nanoid } from "@reduxjs/toolkit";

const  initialState = {
    todos : [{id : 1 , text : 'first Todo'},{id : 2 , text : 'seconde Todo'}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state , action ) => {
            state.todos.push({id : nanoid() , text : action.payload})
        },
        removeTodo : (state , action ) => {
            state.todos = state.todos.filter( X => X.id !== action.payload)
            
        },
        editTodo : (state , action ) => {
            state.todos = state.todos.filter( X => {
                if(X.id !== action.payload){
                    return X.text
                }
                })
            
        },
    }
})

export const {addTodo , removeTodo , editTodo} = todoSlice.actions

export default todoSlice.reducer