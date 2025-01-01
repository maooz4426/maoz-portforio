import '@/styles/globals.scss'
import {Header} from "@/features/header/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body >
      <Header/>
        {children}
      </body>
    </html>
  );
}
