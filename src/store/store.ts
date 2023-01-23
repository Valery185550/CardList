import { configureStore } from '@reduxjs/toolkit';
import { cardsSlice } from '../features/cards/cardsSlice';


export const store = configureStore({
  reducer: {
    [cardsSlice.reducerPath]:cardsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
