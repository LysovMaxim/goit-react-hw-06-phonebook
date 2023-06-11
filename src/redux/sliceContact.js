import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, { payload }) => {
      return (state = [...state, payload]);
    },
    deleteContacts: (state, { payload }) => {
      return (state = state.filter(contact => contact.id !== payload));
    },
  },
});

export const contactReducer = contactSlice.reducer;

export const { addContact, deleteContacts } = contactSlice.actions;
