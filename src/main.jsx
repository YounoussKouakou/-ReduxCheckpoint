import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './redux/taskSlice.js';
import "@fontsource/inter"; // 👈 ajoute ça
import './index.css'; // 🌀 Importation de Tailwind CSS

// Création du store Redux
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

// Rendu de l'app avec Redux Provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
