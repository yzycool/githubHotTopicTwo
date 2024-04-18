/** @format */
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Spin } from 'antd';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from '@/store/index';
import Router from '@/router/index';

const queryClient = new QueryClient();
const App = () => (
  <React.StrictMode>
    <Suspense fallback={<Spin />}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter
            basename={(window as any).__POWERED_BY_QIANKUN__ ? '/data-governance' : ''}
          >
            <Router />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>
);

export default App;
