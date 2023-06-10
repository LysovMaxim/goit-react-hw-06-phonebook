import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { Forma } from './Forma';
import { nanoid } from 'nanoid';
import { ContainerForm } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContacts } from 'store/sliceContact';
import { addValue } from 'store/sliceFilter';

export const App = () => {
  const contactsValue = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

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

  const changeFilter = event => {
    dispatch(addValue(event.currentTarget.value));
  };
  const normalizedFilter = filterValue.toLowerCase();
  const visibleContacts = contactsValue.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ContainerForm>
      <h1>Phonebook</h1>
      <Forma onSubmit={addContacts}/>
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} />
      <Contacts contacts={visibleContacts} onDeleteContacts={deleteContact} />
    </ContainerForm>
  );
};
