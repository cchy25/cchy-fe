import Link from 'next/link';
import classes from './header.module.css';
import NavLink from './nav-link/nav-link';
import LoginBtn from './loginBtn/login-btn';

export default function Header() {
  return (
    <header className={classes.head}>
      <div className={classes.logo}>
        <Link href="/">
          QStart
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
          <LoginBtn />
        </div>
      </nav>
    </header>
  );
}