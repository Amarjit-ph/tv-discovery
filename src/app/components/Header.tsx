"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMovie2Fill } from "react-icons/ri";

export default function Header() {
    const [query, setQuery] = useState("");

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
            <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/">
                    <div className="flex">
                        <div className="text-3xl mr-2"><RiMovie2Fill /></div>
                        <p className="font-mono text-2xl font-bold">
                            Next Episode
                        </p>

                    </div>

                </Link>

                {/* Nav */}
                <nav className="hidden md:flex items-center gap-6 text-gray-200">
                    <Link href="/" className="hover:text-white transition">Home</Link>
                    <Link href="#" className="hover:text-white transition">Movies</Link>
                    <Link href="#" className="hover:text-white transition">Search</Link>
                    <Link href="/about" className="hover:text-white transition">About</Link>
                </nav>

                {/* Search */}
                <form action="/search" method="get" className="flex items-center">
                    <input
                        type="text"
                        name="q"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search shows..."
                        className="bg-gray-900 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </form>
            </div>
        </header>
    );
}
