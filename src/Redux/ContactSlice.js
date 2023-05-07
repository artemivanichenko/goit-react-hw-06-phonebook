const { createSlice } = require('@reduxjs/toolkit');
const { nanoid } = require('nanoid');

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'David Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: {
      reducer(state, { payload }) {
        state.contacts.push(payload);
      },
      prepare(payload) {
        return {
          payload: { name: payload.name, number: payload.number, id: nanoid() },
        };
      },
    },
    deleteContact: {
      reducer(state, { payload }) {
        const index = state.contacts.findIndex(
          contact => contact.id === payload
        );
        state.contacts.splice(index, 1);
      },
    },
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContacts, deleteContact, filterContact } =
  contactsSlice.actions;
export const contactsReduce = contactsSlice.reducer;
