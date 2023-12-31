import { Menu, Navbar } from "~/components/layout";
import "./globals.css";

export const metadata = {
  title: "Elemes",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Menu />
      </body>
    </html>
  );
}
