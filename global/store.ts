import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

// Combine reducers
const rootReducer = {
  auth: authReducer,
};

// Define the store type
export const store = configureStore({
  reducer: rootReducer,
});

// Export the RootState type
export type RootState = ReturnType<typeof store.getState>;
