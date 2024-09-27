'use client'
import { useEffect, useState } from "react";

const AdComponent = () => {
    const [isMounted,setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4503779419255073';
        script.async = true;
        document.body.appendChild(script);
        try {
            //@ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }catch (e) {}
        setIsMounted(true)
    },[]);



    return (
        isMounted && (
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-4503779419255073"
                data-ad-slot={'7019800614'}
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        )
        
    )
};

export default AdComponent;
