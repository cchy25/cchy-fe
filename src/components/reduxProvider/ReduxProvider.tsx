'use client';

import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import store from '@/store/store'; // Adjust the import path as necessary

interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}