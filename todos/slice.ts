// todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
}

const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: (state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const updatedTodo = action.payload;
      const index = state.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        state[index] = updatedTodo;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const idToDelete = action.payload;
      return state.filter((todo) => todo.id !== idToDelete);
    },
  },
});
