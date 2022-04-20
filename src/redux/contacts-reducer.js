
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-action';


export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

