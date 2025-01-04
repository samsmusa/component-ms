import BlogPage from "@/components/page/blog";


export default function Page() {
    return (
        <div className="md:mx-40 ">
            <div className="container mx-auto">
                <div className="flex flex-col min-h-screen">
                    <main className="flex-1">
                        <section className="w-full py-6 md:py-12 lg:py-16">
                            <div className="container px-4 md:px-6">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">SaaSy
                                    Blog</h1>
                                <p className="text-gray-500 dark:text-gray-400 text-center mb-12 max-w-[800px] mx-auto">
                                    Stay up to date with the latest news, tips, and insights from the SaaSy team.
                                </p>
                                <BlogPage/>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
