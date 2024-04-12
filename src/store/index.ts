/** @format */

import {configureStore} from '@reduxjs/toolkit';
import appReducer from '@/store/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  // 此处设置用于解决用对象更改state的值浏览器报错的问题
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
