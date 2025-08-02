'use client';

import { useState } from 'react';
import classes from './LoginModal.module.css';
import { useModal } from '../../context/ModalContext';
import { useIsMounted } from '../../hook/use-is-mounted';

export default function AuthModal() {
    const { isOpen, closeModal } = useModal();
    const isMounted = useIsMounted();
    const [isLogin, setIsLogin] = useState(true);

    if (!isMounted) return null; // 클라이언트 측에서만 렌더링되도록 보장
    if (!isOpen) return null;

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 로그인/회원가입 로직 구현
        console.log(isLogin ? '로그인 시도' : '회원가입 시도');
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