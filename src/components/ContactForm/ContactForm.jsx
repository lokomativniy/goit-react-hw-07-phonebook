import { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { getItems } from '../../redux/contacts-selector';
import { useAddContactMutation } from '../../redux/contacts-slice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(getItems);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const findSameName = () =>
    items.find(item => item.name.toLowerCase() === name.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();
    if (findSameName()) {
      toast.error(`${name} is already in contacts`);
      resetValue();
      return;
    }
    addContact({ name, number });
    toast.success(`${name} is successfully added in contacts`);
    resetValue();
  };

  const resetValue = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
          className={s.input}
          autoComplete="off"
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
          className={s.input}
          autoComplete="off"
        />
      </label>
      <button type="submit" className={s.btn} disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add contact'}
      </button>
    </form>
  );
};
ContactForm.propTypes = {
  items: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default ContactForm;
