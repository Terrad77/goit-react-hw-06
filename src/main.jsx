import React from 'react';
import ReactDOM from 'react-dom/client';
// Імпорт стилів нормалізації
import 'modern-normalize';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux'; // для зв'язати store з React компонентами App
import { store } from './redux/store'; // передамо в пропс для підключення Redux store до App

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
