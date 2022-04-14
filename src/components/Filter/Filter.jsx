import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactsAction from '../../redux/contacts-action';
import { getFilter } from '../../redux/contacts-selector';
import PropTypes from 'prop-types';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsAction.changeFilter(e.target.value));
  return (
    <label className={s.label}>
      Find contact's by name
      <input
        value={value}
        className={s.input}
        onChange={onChange}
        name="filter"
        type="text"
        autoComplete="off"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
