"use client";

import classes from './login-button.module.css';

export default function LoginBtn() {
  return (
    <button className={`${classes.loginBtn} flex-center-row`}>
        로그인/회원가입
    </button>
  );
}