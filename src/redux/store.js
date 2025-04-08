// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Load from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) return [];
    return JSON.parse(serializedState);
  } catch (e) {
    return [];
  }
};

// Save to localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.log('Error saving to localStorage', e);
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadFromLocalStorage(),
  },
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
