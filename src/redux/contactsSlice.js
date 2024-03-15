// У файлі contactsSlice.js оголоси слайс контактів, використовуючи функцію createSlice().
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    // Екшени слайса для використання в dispatch:
    // addContact - додавання нового контакту до властивості items
    addContact(state, action) {
      state.items.push(action.payload);
    },
    // deleteContact - видалення контакту за id з властивості items
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

// експорт редюсер, а також його екшени і селектори.

export const selectContacts = state => state.contacts.items; // функція-селектор для використання в useSelector: selectContacts - повертає список контактів з властивості items.

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
