'use client'; // 이 컴포넌트는 클라이언트 컴포넌트입니다.

import { RecoilRoot } from 'recoil';
import { ReactNode } from 'react';

interface RecoilContextProviderProps {
  children: ReactNode;
}

export default function RecoilContextProvider({ children }: RecoilContextProviderProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}