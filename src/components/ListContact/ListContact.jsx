import React from 'react';
import s from './ListContact.module.css';
import contactsAction from '../../redux/contacts-action';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts-selector';
import PropTypes from 'prop-types';

const ListContact = () => {
  const items = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const deleteContact = id => dispatch(contactsAction.deleteContact(id));
  return (
    <ul className={s.list}>
      {items.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button className={s.btn} onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ListContact.propTypes = {
  items: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ListContact;
