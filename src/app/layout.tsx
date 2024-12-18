import type { Metadata } from "next";
import "../style/globals.css";
import Header from "./_layout/Header";
import Footer from "./_layout/footer/Footer";


export const metadata: Metadata = {
    title: "AppAdmit",
    description: "",
};

export default function RootLayout({children}:RootLayout) {
    return (
        <html lang="en">
            <head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4412279983219767" crossOrigin="anonymous"></script>                
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
