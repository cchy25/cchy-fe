import RecoilContextProvider from "@/components/recoilContextProvider/RecoilContextProvider";
import "./globals.css";

interface RootProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body>
        <RecoilContextProvider>
          {children}
        </RecoilContextProvider>
      </body>
    </html>
  );
}
