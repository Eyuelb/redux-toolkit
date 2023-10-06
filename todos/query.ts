import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { todoApi } from './api';

// Replace these types with your actual types for Todo objects
interface Todo {
  id: number;
  text: string;
}

// Define your CRUD API endpoints
export const todoApiQuery = todoApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all todos
    getTodos: builder.query<Todo[], void>({
      query: () => 'todos',
    }),

    // Get a single todo by ID
    getTodo: builder.query<Todo, number>({
      query: (id) => `todos/${id}`,
    }),

    // Add a new todo
    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (newTodo) => ({
        url: 'todos',
        method: 'POST',
        body: newTodo,
      }),
    }),

    // Update an existing todo
    updateTodo: builder.mutation<Todo, Todo>({
      query: (updatedTodo) => ({
        url: `todos/${updatedTodo.id}`,
        method: 'PUT',
        body: updatedTodo,
      }),
    }),

    // Delete a todo by ID
    deleteTodo: builder.mutation<void, number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Export the generated hooks for using the endpoints
export const {
  useGetTodosQuery,
  useGetTodoQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApiQuery;
