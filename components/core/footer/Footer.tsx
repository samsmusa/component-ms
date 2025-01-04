import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <Link href="/" className="mb-4 md:mb-0">
            <span className="text-2xl font-bold">
              <span className="text-primary">pixel</span>
              <span>lab</span>
            </span>
                    </Link>
                    <div className="flex space-x-6">
                        <Link href="/terms" className="text-gray-600 hover:text-primary">
                            Terms
                        </Link>
                        <Link href="/privacy" className="text-gray-600 hover:text-primary">
                            Privacy Policy
                        </Link>
                        <Link href="/pricing" className="text-gray-600 hover:text-primary">
                            Pricing
                        </Link>
                        <Link href="/blog" className="text-gray-600 hover:text-primary">
                            Blog
                        </Link>
                    </div>
                    <p className="text-gray-600 text-sm mt-4 md:mt-0">
                        © 2024 Pixelab. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}