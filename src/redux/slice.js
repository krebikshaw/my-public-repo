import { createSlice } from '@reduxjs/toolkit';
import { getReposAPI } from '../webAPI';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    reps: [],
    rep: {},
    isLoading: false,
  },
  reducers: {
    setReps: (state, action) => {
      state.reps.push(...action.payload);
    },
    setRep: (state, action) => {
      state.rep = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setReps, setRep, setIsLoading } = userSlice.actions;

export const getRepos = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return getReposAPI().then((result) => {
    dispatch(setIsLoading(false));
    dispatch(setReps(result));
    dispatch(setRep(result[0]));
  });
};

export const selectReps = (state) => state.user.reps;
export const selectIsLoading = (state) => state.user.isLoading;
export default userSlice.reducer;
