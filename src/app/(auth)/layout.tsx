
import TopBar from "@/components/shared/TopBar";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import BannerAuth from "@/components/auth/BannerAuth";

import NavBarProfile from "@/components/shared/NavBarProfile";
import { LeftMenuContextProvider } from "../Context/menuLeft";
import LeftMenuAuth from "@/components/auth/LeftMenuAuth";

const inter = Inter({ subsets: ["latin"] });



export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <LeftMenuContextProvider>
          <nav>
            <LeftMenuAuth />
            <TopBar />
            <NavBarProfile />
            <BannerAuth />
          </nav>
          <main>{children}</main>
          </LeftMenuContextProvider>  
      </body>
    </html>
  );
}
