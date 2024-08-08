import type { Metadata } from "next";
import "../style/globals.css";
import Header from "./_layout/Header";


export const metadata: Metadata = {
    title: "CollegeGo",
    description: "",
};

export default function RootLayout({children}:RootLayout) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <Header/>
                {children}
            </body>
        </html>
    );
}
