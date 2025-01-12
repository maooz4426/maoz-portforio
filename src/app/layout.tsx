import "@/styles/globals.scss";
import { Header } from "@/features/header/components";
import { M_PLUS_Rounded_1c } from "next/font/google";

const mPlusRounded1c = M_PLUS_Rounded_1c({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={mPlusRounded1c.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
