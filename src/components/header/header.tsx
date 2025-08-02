'use client';
import Link from 'next/link';
import classes from './header.module.css';
import NavLink from './nav-link/nav-link';
import LoginBtn from './loginBtn/login-btn';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [userInitial, setUserInitial] = useState<string | null>(null);

  useEffect(() => {
    const storedInitial = localStorage.getItem('userInitial');
    setUserInitial(storedInitial);

    // 로그인 이벤트 수신
    const handleLogin = () => {
      const updatedInitial = localStorage.getItem('userInitial');
      setUserInitial(updatedInitial);
    };

    window.addEventListener('loginSuccess', handleLogin);
    return () => window.removeEventListener('loginSuccess', handleLogin);
  }, []);

  return (
    <header className={classes.head}>
      <div className={classes.logo}>
        <Link href="/">
          <Image src="/icons/logo.svg" alt='logo' width={25} height={25} priority/><span>Start</span>
        </Link>
      </div>
      <nav className={`${classes.navBar} flex-center-row`}>
        <div className={`${classes.diagnosisWrapper} flex-center-row`}>
          <NavLink href="/diagnosis/1">
            진단
          </NavLink>
        </div>
        <div className={`${classes.policyWrapper} flex-center-row`}>
          <NavLink href="/policies">
            정책 모아보기
          </NavLink>
        </div>
        <div className={`${classes.loginWrapper} flex-center-row`}>
          {userInitial ? <div className={classes.initial}>{userInitial}</div> : <LoginBtn />}
        </div>
      </nav>
    </header>
  );
}