import Link from 'next/link'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {CheckCircle2} from 'lucide-react'

export default function Page() {
    return (
        <div className="md:mx-40 ">
            <div className="container mx-auto">
                <div className="flex flex-col min-h-screen">
                    <main className="flex-1">
                        <section className="w-full py-12 md:py-24 lg:py-32">
                            <div className="container px-4 md:px-6">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Pricing
                                    Plans</h1>
                                <p className="text-gray-500 dark:text-gray-400 text-center mb-12 max-w-[800px] mx-auto">
                                    Choose the perfect plan for your needs. Upgrade or downgrade at any time.
                                </p>
                                <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Basic</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-4xl font-bold">$9.99</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
                                            <ul className="mt-4 space-y-2">
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> 5
                                                    Projects
                                                </li>
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> Basic Analytics
                                                </li>
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> 24/7 Support
                                                </li>
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> 1
                                                    Team Member
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full" asChild>
                                                <Link href="/auth">Get Started</Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Pro</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-4xl font-bold">$19.99</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
                                            <ul className="mt-4 space-y-2">
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> Unlimited Projects
                                                </li>
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> Advanced Analytics
                                                </li>
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> Priority Support
                                                </li>
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> 5
                                                    Team Members
                                                </li>
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> Custom Integrations
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full" asChild>
                                                <Link href="/auth">Get Started</Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Enterprise</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-4xl font-bold">Custom</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">contact for
                                                pricing</p>
                                            <ul className="mt-4 space-y-2">
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> Custom Solutions
                                                </li>
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> Dedicated Account Manager
                                                </li>
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> 24/7 Premium Support
                                                </li>
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> Unlimited Team Members
                                                </li>
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> Custom Reporting
                                                </li>
                                                <li className="flex items-center"><CheckCircle2
                                                    className="mr-2 h-4 w-4"/> SLA
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full" asChild>
                                                <Link href="/contact">Contact Sales</Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>

    )
}
