import PropTypes from 'prop-types';
import { ContactsListEl, ContactsList, ContactsBtn } from './Contacts.styled';

export const Contacts = ({ contacts, onDeleteContacts }) => {
  return (
    <>
      <ContactsList>
        {contacts.map(el => {
          return (
            <ContactsListEl key={el.id}>
              {el.name} <span>{el.number}</span>
              <ContactsBtn
                type="button"
                onClick={() => onDeleteContacts(el.id)}
              >
                Delet
              </ContactsBtn>
            </ContactsListEl>
          );
        })}
      </ContactsList>
    </>
  );
};

Contacts.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
