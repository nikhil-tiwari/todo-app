import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
            return state;
        },
        toggle: (state, action) => {
            const index = action.payload;
            state[index].isCompleted = !state[index].isCompleted
            return state;
        },
        deleteTodo: (state, action) => {
            const index = action.payload;
            state.splice(index, 1);
            return state;
        },
        editTodo: (state, action) => {
            const { newText, index } = action.payload;
            state[index].text = newText;
            return state;
        }
    }
})

export const { addTodo, toggle, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;