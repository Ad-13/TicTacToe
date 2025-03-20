import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import errorMiddleware from '@middlewares/errorMiddleware';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(errorMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
