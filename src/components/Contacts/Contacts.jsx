import { ContactsListEl, ContactsList, ContactsBtn } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/sliceContact';

export const Contacts = () => {
  const contactsValue = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const normalizedFilter = filterValue.toLowerCase();
  const visibleContacts = contactsValue.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <>
      <ContactsList>
        {visibleContacts.map(el => {
          return (
            <ContactsListEl key={el.id}>
              {el.name} <span>{el.number}</span>
              <ContactsBtn type="button" onClick={() => deleteContact(el.id)}>
                Delet
              </ContactsBtn>
            </ContactsListEl>
          );
        })}
      </ContactsList>
    </>
  );
};
