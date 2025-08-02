import { configureStore } from '@reduxjs/toolkit';
import answersReducer from './answerSlice/answerSlice';

export const store = configureStore({
  reducer: {
    answers: answersReducer,
  },
});

export default store; 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;