import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuth: boolean;
  user: null | any;
}

const initialState: AuthState = {
  isAuth: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ data: any | null }>) => {
      state.user = action.payload;
      if (action.payload === null) {
        state.isAuth = false;
      } else {
        state.isAuth = true;
      }
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
