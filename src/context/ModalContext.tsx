// 이 파일은 모달의 전역 상태를 관리하는 Context를 정의합니다.
// 전역 상태를 사용해 앱의 어느 곳에서든 모달을 열고 닫을 수 있습니다.
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

// 모달 컨텍스트의 타입 정의
interface ModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

// 초기 상태
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// ModalContext를 제공하는 Provider 컴포넌트
export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

// ModalContext를 편리하게 사용할 수 있는 커스텀 훅
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};