import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "moneytor",
  description: "Mone¥ Monitor App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-primary h-full w-screen text-white ${inter.className}`}>{children}</body>
    </html>
  );
}
