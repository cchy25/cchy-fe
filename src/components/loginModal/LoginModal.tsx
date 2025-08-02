'use client';

import { useState } from 'react';
import classes from './LoginModal.module.css';
import { useModal } from '../../context/ModalContext';
import { useIsMounted } from '../../hook/use-is-mounted';
import axios from 'axios';
import { headers } from 'next/headers';

export default function AuthModal() {
    const { isOpen, closeModal } = useModal();
    const isMounted = useIsMounted();
    const [isLogin, setIsLogin] = useState(true);
    

    if (!isMounted) return null; // 클라이언트 측에서만 렌더링되도록 보장
    if (!isOpen) return null;

    const login = async () => {
        // 로그인 로직 구현
        console.log('로그인 로직 실행');
        // const res = await axios.post('https://api.qstart.xyz/v1/auth/login', {
        const res = await axios.post('http://localhost:8080/v1/auth/login', {
            headers:{
                "Content-Type": "application/json"
            },
            body: {
                loginType: "LOCAL",
                code: "",
                email: document.getElementById('email')?.value,
                password: document.getElementById('password')?.value,
                isLongTerm: true
            } 
        });
        if (res.status === 200) {
            console.log('로그인 성공:', res.data);
            // 로그인 성공 후 처리
            res.data && localStorage.setItem('accessToken', res.data.accessToken);
        } else {
            console.error('로그인 실패:', res.data);
            // 로그인 실패 처리
            alert('로그인 실패: ' + res.data.message);
        }
    };
    const signup = async () => {
        // 회원가입 로직 구현
        console.log('회원가입 로직 실행');
        // const res = await axios.post('https://api.qstart.xyz/v1/auth/signup', {
        const res = await axios.post('http://localhost:8080/v1/auth/signup', {
            headers:{
                "Content-Type": "application/json"
            },
            body: {
                socialType: "LOCAL",
                signupToken: "",
                username: "asd",
                email: document.getElementById('email')?.value,
                password: document.getElementById('password')?.value,
                passwordConfirm: document.getElementById('password-confirm')?.value,
            } 
        });
        if (res.status === 200) {
            console.log('회원가입 성공:', res.data);
            // 회원가입 성공 후 처리
            alert('회원가입 성공');
        } else {
            console.error('회원가입 실패:', res.data);
            // 회원가입 실패 처리
            alert('회원가입 실패: ' + res.data.message);
        }
    }
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 로그인/회원가입 로직 구현
        console.log(isLogin ? '로그인 시도' : '회원가입 시도');
        if(isLogin) {
            login()
        } else {
            signup();
        }
        closeModal();
    };

    return (
        <div className={classes.modalBackdrop} onClick={closeModal}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={classes.closeButton} onClick={closeModal}>&times;</button>
                <h2 className={classes.title}>{isLogin ? '로그인' : '회원가입'}</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className={classes.inputGroup}>
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className={classes.inputGroup}>
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" required />
                    </div>
                    {!isLogin && (
                        <div className={classes.inputGroup}>
                            <label htmlFor="password-confirm">비밀번호 확인</label>
                            <input type="password" id="password-confirm" required />
                        </div>
                    )}
                    <button type="submit" className={classes.submitButton}>
                        {isLogin ? '로그인' : '회원가입'}
                    </button>
                </form>
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <p>
                        {isLogin ? '아직 회원이 아니신가요? ' : '이미 회원이신가요? '}
                        <span 
                            style={{ color: '#0f2fd8ff', cursor: 'pointer', textDecoration: 'underline' }}
                            onClick={() => setIsLogin(prev => !prev)}
                        >
                            {isLogin ? '회원가입' : '로그인'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}