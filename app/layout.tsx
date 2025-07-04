import type { Metadata } from "next";
import {Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Body from "@/components/common/body";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});



export const metadata: Metadata = {
  title: "Quick Prep",
  description: "Quick Prep - Your AI-Powered pdf summerizer with the chatgroup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSans.variable} antialiased`}
        
      >
       <div className='relative flex min-h-screen flex-col bg-[#fde6cc  ]' >
         
        <Header />
        <main className='flex-1'>{children}</main>
        
        <Footer/>
       </div>
      </body>
    </html>
  );
}
