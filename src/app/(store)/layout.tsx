import NavBar from "@/components/shared/NavBar"
import TopBar from "@/components/shared/TopBar"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css";
import { LeftMenuContextProvider } from "../Context/menuLeft";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
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
         <NavBar />
       </nav>
         <main>
         
            {children}
          
         </main>
        </LeftMenuContextProvider>
      </body>
    </html>
  )
}
