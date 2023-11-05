import {createSlice} from '@reduxjs/toolkit';
import {setToken} from '../helper/storege_helper';

const loginValues = {
  token: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: loginValues,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      setToken(action.payload); //save local
      return state;
    },
    removeToken: state => {
      state.token = '';
      setToken('')
      return state;
    },
  },
});
