"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaChevronDown } from "react-icons/fa";

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <>
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm">
                <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-center">
                    🛕 தமிழ்நாட்டின் மிகப்பெரிய கோவில் தகவல் களஞ்சியம்
                </div>
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-amber-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="h-20 flex items-center justify-between">
                        {/* Logo */}
                    
                        <div className="flex items-center gap-3">
                            <Link href="/" className="group flex items-center gap-3">
                                <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center text-white font-bold">
                                    ॐ
                                </div>
                                <div>
                                    <h1 className="text-2xl font-extrabold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                                        TempleDetails
                                    </h1>
                                    <p className="text-xs text-gray-500">Temple Heritage Portal</p>
                                </div>
                            </Link>
                        </div>

                        

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-4 text-sm">
                            <Link
                                href="/"
                                className="text-primary font-semibold hover:text-primary-hover transition"
                            >
                                முகப்பு
                            </Link>

                            <div className="relative group">
                                <button className="flex items-center gap-2 font-medium text-gray-700 hover:text-primary-hover transition">
                                    கோவில் வகைகள்
                                    <FaChevronDown size={12} />
                                </button>

                                <div className="absolute top-full left-0 mt-4 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                                    <div className="p-4">
                                        <Link
                                            href="/shiva-temples"
                                            className="block px-4 py-3 rounded-xl hover:bg-orange-100"
                                        >
                                            🕉 சிவன் கோவில்கள்
                                        </Link>

                                        <Link
                                            href="/vishnu-temples"
                                            className="block px-4 py-3 rounded-xl hover:bg-orange-100"
                                        >
                                            🙏 விஷ்ணு கோவில்கள்
                                        </Link>

                                        <Link
                                            href="/murugan-temples"
                                            className="block px-4 py-3 rounded-xl hover:bg-orange-100"
                                        >
                                            🔱 முருகன் கோவில்கள்
                                        </Link>

                                        <Link
                                            href="/amman-temples"
                                            className="block px-4 py-3 rounded-xl hover:bg-orange-100"
                                        >
                                            🌺 அம்மன் கோவில்கள்
                                        </Link>

                                        <Link
                                            href="/vinayagar-temples"
                                            className="block px-4 py-3 rounded-xl hover:bg-orange-100"
                                        >
                                            🐘 விநாயகர் கோவில்கள்
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Link
                                href="/temple-groups"
                                className="font-medium text-gray-700 hover:text-primary-hover transition"
                            >
                                சிறப்பு தலங்கள்
                            </Link>

                            <Link
                                href="/blog"
                                className="font-medium text-gray-700 hover:text-primary-hover transition"
                            >
                                கட்டுரைகள்
                            </Link>
                        </nav>

                        {/* Right Side */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/search"
                                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 hover:border-primary hover:text-primary-hover transition"
                            >
                                <FaSearch size={14} />
                                தேடுங்கள்
                            </Link>

                            <button
                                onClick={() => setMobileMenu(true)}
                                className="lg:hidden"
                            >
                                <FaBars size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black/60 z-[100] transition ${mobileMenu
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
            >
                <div
                    className={`absolute right-0 top-0 h-full w-80 bg-white transition-transform duration-300 ${mobileMenu
                        ? "translate-x-0"
                        : "translate-x-full"
                        }`}
                >
                    <div className="p-5 border-b flex items-center justify-between">
                        <h2 className="text-xl font-bold">
                            TempleInfo
                        </h2>

                        <button onClick={() => setMobileMenu(false)}>
                            <FaTimes size={22} />
                        </button>
                    </div>

                    <div className="p-5 space-y-2">
                        <Link
                            href="/"
                            className="block p-3 rounded-xl hover:bg-amber-50"
                        >
                            🏠 முகப்பு
                        </Link>

                        <Link
                            href="/shiva-temples"
                            className="block p-3 rounded-xl hover:bg-amber-50"
                        >
                            🕉 சிவன் கோவில்கள்
                        </Link>

                        <Link
                            href="/vishnu-temples"
                            className="block p-3 rounded-xl hover:bg-amber-50"
                        >
                            🙏 விஷ்ணு கோவில்கள்
                        </Link>

                        <Link
                            href="/murugan-temples"
                            className="block p-3 rounded-xl hover:bg-amber-50"
                        >
                            🔱 முருகன் கோவில்கள்
                        </Link>

                        <Link
                            href="/amman-temples"
                            className="block p-3 rounded-xl hover:bg-amber-50"
                        >
                            🌺 அம்மன் கோவில்கள்
                        </Link>

                        <Link
                            href="/108-divya-desam"
                            className="block p-3 rounded-xl hover:bg-amber-50"
                        >
                            🛕 108 திவ்ய தேசங்கள்
                        </Link>

                        <Link
                            href="/navagraha-temples"
                            className="block p-3 rounded-xl hover:bg-amber-50"
                        >
                            ☀ நவகிரக கோவில்கள்
                        </Link>

                        <Link
                            href="/blog"
                            className="block p-3 rounded-xl hover:bg-amber-50"
                        >
                            📚 கட்டுரைகள்
                        </Link>

                        <Link
                            href="/contact"
                            className="block p-3 rounded-xl hover:bg-amber-50"
                        >
                            📞 தொடர்புக்கு
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}