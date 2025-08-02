'use client';
import "./globals.css";
import Header from "@/components/header/header";
import AuthModal from "@/components/loginModal/LoginModal";
import ReduxProvider from "@/components/reduxProvider/ReduxProvider";
import { ModalProvider } from "@/context/ModalContext";

interface RootProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="ko">
      <body>
        <ReduxProvider>
          <ModalProvider>
            <Header />
            {children}
            <AuthModal />
          </ModalProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
