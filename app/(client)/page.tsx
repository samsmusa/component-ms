import {Hero} from "@/components/page/home/Hero";
import {Portfolio} from "@/components/page/home/Portfolio";
import {Services} from "@/components/page/home/Services";
import {Newsletter} from "@/components/page/home/Newsletter";
import {Team} from "@/components/page/home/Team";
import {Testimonials} from "@/components/page/home/Testimonials";

export default function Home() {
    return (
        <div className="md:mx-40">
            <main className="">
                <Hero/>
                <Portfolio/>
                <Services/>
                <Newsletter/>
                <Team/>
                <Testimonials/>
            </main>
        </div>
    );
}
