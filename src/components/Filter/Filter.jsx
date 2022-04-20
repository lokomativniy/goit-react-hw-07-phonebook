import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts-action';
import { getFilter } from '../../redux/contacts-selector';
import PropTypes from 'prop-types';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        value={filter}
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
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
