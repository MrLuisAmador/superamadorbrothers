import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3">
                    <Image src="/sab-logo.png" alt="Those Amador Brothers" width={70} height={70} />
                    <span className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block">
                        Those Amador Bros
                    </span>
                </Link>
                
                <nav className="flex items-center space-x-6">
                    <Link 
                        href="/luis" 
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                    >
                        Luis
                    </Link>
                    <Link 
                        href="/evan" 
                        className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors"
                    >
                        Evan
                    </Link>
                    <Link 
                        href="/" 
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                    >
                        Home
                    </Link>
                </nav>
            </div>
        </header>
    );
}