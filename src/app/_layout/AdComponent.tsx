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
            <div className="container">
                <ins 
                    className="adsbygoogle"
                    style={{ display: "block",width:"100%",height:'40px',backgroundColor:"#444" }}
                    data-ad-client="ca-pub-4503779419255073"
                    data-ad-slot={'7019800614'}
                    data-ad-format="auto"
                    data-full-width-responsive="true">
                </ins>
            </div>
        )
        
    )
};

export default AdComponent;
