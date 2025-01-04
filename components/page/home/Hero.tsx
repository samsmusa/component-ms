import Image from "next/image";
import hero from "@/public/hero.svg"

export function Hero() {
    return (
        <section className="container mx-auto px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        We boost growth for your startup business
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Get your top of the heart of startup success industry with digital services that drive results
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90">
                            Get Started
                        </button>
                        <button
                            className="flex items-center space-x-2 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100">
                            <span>Learn More</span>
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <Image src={hero} alt={'dd'}/>
                </div>
            </div>
        </section>
    )
}

