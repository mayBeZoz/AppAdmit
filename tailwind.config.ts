import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors:{
                "main-blue":"#1F94E0",
                "main-sky-white":"#F7FAFA",
                "main-black":"#0D171C"
            },
            fontFamily:{
                "lexend":"Lexend",

            },
            container:{
                center:true
            }
        },
    },
    plugins: [],
};
export default config;
