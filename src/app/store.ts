import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cardListReducer from "../features/cardlist/cardlistSlice";

export const store = configureStore({
  reducer: {
    cardList: cardListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["cardList/fetchRobots/fulfilled"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg"],
        // Ignore these paths in the state
        ignoredPaths: ["cardList.robots.0.date"],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
