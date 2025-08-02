"use client";

import { useModal } from '@/context/ModalContext';
import classes from './login-button.module.css';

export default function LoginBtn() {
  const { openModal } = useModal();

  return (
    <button 
      className={`${classes.loginBtn} flex-center-row`}
      onClick={openModal}
    >
        로그인/회원가입
    </button>
  );
}