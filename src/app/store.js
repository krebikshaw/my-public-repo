import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/slice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
