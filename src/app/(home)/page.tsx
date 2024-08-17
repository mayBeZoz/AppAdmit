import Image from "next/image";
import Hero from "./_sections/Hero";
import Services from "./_sections/Services";
import About from "./_sections/About";

export default function Home() {
    return (
        <>
            <Hero/>
            <Services/>
            <About/>
        </>
    );
}
