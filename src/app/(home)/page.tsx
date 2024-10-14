import Hero from "./_sections/Hero";
import RecentPosts from "./_sections/RecentPosts";
import Services from "./_sections/Services";
import WhyUs from "./_sections/WhyUs";

export default function Home() {
    return (
        <>
            <Hero/>
            <WhyUs/>
            <Services/>
            <RecentPosts/>
        </>
    );
}
