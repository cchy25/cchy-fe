import RecoilContextProvider from "@/components/recoilContextProvider/RecoilContextProvider";
import "./globals.css";
import Header from "@/components/header/header";

interface RootProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="ko">
      <body>
        <RecoilContextProvider>
          <Header />
          {children}
        </RecoilContextProvider>
      </body>
    </html>
  );
}
