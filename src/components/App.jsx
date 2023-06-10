import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { Forma } from './Forma';
import { nanoid } from 'nanoid';
import { ContainerForm } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addValue, addContact, deleteContacts } from 'store/slice';

export const App = () => {
  const { contacts, filter } = useSelector(state => state.app);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const visibleCotacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const changeFilter = event => {
    dispatch(addValue(event.currentTarget.value));
  };

  const addContacts = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(contact));
  };

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };
  return (
    <ContainerForm>
      <h1>Phonebook</h1>
      <Forma onSubmit={addContacts} arr={contacts} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts contacts={visibleCotacts} onDeleteContacts={deleteContact} />
    </ContainerForm>
  );
};
