//npm install redux // npm r redux
//npm install react - redux // для зв'язку store з компонентами
//npm install @reduxjs/toolkit // стандартизація та спрощення написання логіки Redux, no necessary: npm install redux, if no use combineReducers()

//=============== Before ========================
//import { createStore } from 'redux';

// дозвол ініціалізувати логіку Redux DevTools та зв'язати її з розширенням в інструментах розробника.
//npm install @redux-devtools / extension // npm r  @redux-devtools / extension

// використовуємо devToolsEnhancer при створенні store, передавши її результат третім аргументом(enhancer), замість початкового стану.
//import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

//=============== After ========================
import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';
import contactsReducer from './contactsSlice'; // Імпорт редюсера контактів
import filtersReducer from './filtersSlice'; // Імпорт редюсера фільтрів

// початковий стан Redux для кореневого редюсера
const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: '',
  },
};
//редюсер який тільки повертає отриманий стан
// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer); //refactoring
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Додавання редюсера контактів
    filters: filtersReducer, // Додавання редюсера фільтрів
  },
  preloadedState: initialState, // Початковий стан
});
