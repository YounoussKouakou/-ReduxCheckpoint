import { createSlice } from '@reduxjs/toolkit';

let id = 1;

// Création du slice Redux pour gérer les tâches
const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    filter: 'all', // "all" | "done" | "not_done"
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: id++, description: action.payload, isDone: false });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) task.description = action.payload.description;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTask, toggleTask, editTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
