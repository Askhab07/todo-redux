import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '../../types/ITodo';

interface IStoreState {
  todos: ITodo[];
}

const initialState: IStoreState = {
  todos: [
    {
      id: 1,
      title: 'Купить продукты',
      category: 'event',
      date: '2025-02-06',
      time: '12:00',
      notes: 'Молоко, хлеб, овощи для салата.',
      completed: false,
    },
    {
      id: 2,
      title: 'Встреча с командой',
      category: 'event',
      date: '2025-02-06',
      time: '11:00',
      notes: 'Обсудить проект X, подготовить презентацию и распределить задачи.',
      completed: true,
    },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      const newTodo = {
        ...action.payload,
        id: action.payload.id || Date.now(),
      };
      state.todos.push(newTodo);
    },
    completedTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, completedTodo } = todoSlice.actions;
