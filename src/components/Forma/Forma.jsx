import { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, FormBtn } from './Forma.styled';

export const Forma = ({ arr, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const hendleSubmit = event => {
    event.preventDefault();
    const nameContacts = arr.map(el => el.name.toLowerCase());
    if (nameContacts.includes(name.toLowerCase())) {
      alert(`${name} is in your contacts`);
    } else {
      onSubmit(name, number);
      reset();
    }
  };

  const hendleNameTelChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={hendleSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={hendleNameTelChange}
          />
        </label>

        <label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={hendleNameTelChange}
          />
        </label>
        <FormBtn type="submit">Add contact</FormBtn>
      </form>
    </>
  );
};

Forma.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
