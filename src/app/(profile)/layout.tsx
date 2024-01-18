
import TopBar from "@/components/shared/TopBar"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css";
import NavBarProfile from "@/components/shared/NavBarProfile";
import { LeftMenuContextProvider } from "../Context/menuLeft";


const inter = Inter({ subsets: ['latin'] })



export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <LeftMenuContextProvider>
       <nav>
         <TopBar />
         <NavBarProfile />
       </nav>
         <main>
         
            {children}
         
         </main>
         </LeftMenuContextProvider>
      </body>
    </html>
  )
}
