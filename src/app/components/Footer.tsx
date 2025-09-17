import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 border-t border-gray-800 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                    <h4 className="text-gray-200 font-semibold mb-3">Explore</h4>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-white">Home</Link></li>
                        <li><Link href="/search" className="hover:text-white">Search</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-gray-200 font-semibold mb-3">About</h4>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="hover:text-white">Our Project</Link></li>
                        <li><a href="https://www.themoviedb.org/" target="_blank" className="hover:text-white">TMDB API</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-gray-200 font-semibold mb-3">Legal</h4>
                    <ul className="space-y-2">
                        <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-gray-200 font-semibold mb-3">Connect</h4>
                    <ul className="space-y-2">
                        <li><a href="https://github.com/" target="_blank" className="hover:text-white">GitHub</a></li>
                        <li><a href="https://vercel.com/" target="_blank" className="hover:text-white">Vercel</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center py-4 border-t border-gray-800 text-xs text-gray-500">
                © {new Date().getFullYear()} Show Discovery. Built with ❤️ for Kritter Software Technology using TMDB.
            </div>
        </footer>
    );
}
