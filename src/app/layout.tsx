import "./globals.css";
import Header from "@/components/header/header";
import ReduxProvider from "@/components/reduxProvider/ReduxProvider";

interface RootProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="ko">
      <body>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
