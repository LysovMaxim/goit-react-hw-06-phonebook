import { initialState } from './initialState';
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addValue: (state, { payload }) => {
      state.filter = payload;
    },
    addContact: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const { addValue, addContact, deleteContacts } = counterSlice.actions;
