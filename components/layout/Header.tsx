"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaChevronDown, FaSun, FaMoon } from "react-icons/fa";
import { useTheme, useLanguage } from "@/context";

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();

    return (
        <>
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm">
                <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-center">
                    🛕 {t("தமிழ்நாட்டின் மிகப்பெரிய கோவில் தகவல் களஞ்சியம்", "Tamil Nadu's Largest Temple Information Repository")}
                </div>
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-amber-100 dark:border-gray-800 shadow-sm">
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
                                {t("முகப்பு", "Home")}
                            </Link>

                            <div className="relative group">
                                <button className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300 hover:text-primary-hover transition">
                                    {t("கோவில் வகைகள்", "Temple Types")}
                                    <FaChevronDown size={12} />
                                </button>

                                <div className="absolute top-full left-0 mt-4 w-72 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                                    <div className="p-4">
                                        <Link
                                            href="/shiva-temples"
                                            className="block px-4 py-3 rounded-xl hover:bg-orange-100 dark:hover:bg-gray-700"
                                        >
                                            🕉 {t("சிவன் கோவில்கள்", "Shiva Temples")}
                                        </Link>

                                        <Link
                                            href="/vishnu-temples"
                                            className="block px-4 py-3 rounded-xl hover:bg-orange-100 dark:hover:bg-gray-700"
                                        >
                                            🙏 {t("விஷ்ணு கோவில்கள்", "Vishnu Temples")}
                                        </Link>

                                        <Link
                                            href="/murugan-temples"
                                            className="block px-4 py-3 rounded-xl hover:bg-orange-100 dark:hover:bg-gray-700"
                                        >
                                            🔱 {t("முருகன் கோவில்கள்", "Murugan Temples")}
                                        </Link>

                                        <Link
                                            href="/amman-temples"
                                            className="block px-4 py-3 rounded-xl hover:bg-orange-100 dark:hover:bg-gray-700"
                                        >
                                            🌺 {t("அம்மன் கோவில்கள்", "Amman Temples")}
                                        </Link>

                                        <Link
                                            href="/vinayagar-temples"
                                            className="block px-4 py-3 rounded-xl hover:bg-orange-100 dark:hover:bg-gray-700"
                                        >
                                            🐘 {t("விநாயகர் கோவில்கள்", "Vinayagar Temples")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Link
                                href="/temple-groups"
                                className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary-hover transition"
                            >
                                {t("சிறப்பு தலங்கள்", "Sacred Places")}
                            </Link>

                            <Link
                                href="/blog"
                                className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary-hover transition"
                            >
                                {t("கட்டுரைகள்", "Articles")}
                            </Link>
                        </nav>

                        {/* Right Side */}
                        <div className="flex items-center gap-3">
                            {/* Language Toggle */}
                            <button
                                onClick={() => setLanguage(language === "ta" ? "en" : "ta")}
                                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full border border-gray-300 hover:border-primary hover:text-primary-hover transition text-sm font-medium dark:border-gray-600 dark:hover:border-orange-500"
                                title={language === "ta" ? "Switch to English" : "தமிழுக்கு மாற்று"}
                            >
                                <span className={language === "ta" ? "text-primary font-bold" : "text-gray-500 dark:text-gray-400"}>த</span>
                                <span className="text-gray-300 dark:text-gray-600">/</span>
                                <span className={language === "en" ? "text-primary font-bold" : "text-gray-500 dark:text-gray-400"}>En</span>
                            </button>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2.5 rounded-full border border-gray-300 hover:border-primary hover:text-primary-hover transition dark:border-gray-600 dark:hover:border-orange-500"
                                title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                            >
                                {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} className="text-yellow-500" />}
                            </button>

                            <Link
                                href="/search"
                                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 hover:border-primary hover:text-primary-hover transition dark:border-gray-600 dark:hover:border-orange-500"
                            >
                                <FaSearch size={14} />
                                {t("தேடுங்கள்", "Search")}
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
                    className={`absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 transition-transform duration-300 ${mobileMenu
                        ? "translate-x-0"
                        : "translate-x-full"
                        }`}
                >
                    <div className="p-5 border-b dark:border-gray-800 flex items-center justify-between">
                        <h2 className="text-xl font-bold">
                            TempleInfo
                        </h2>

                        <button onClick={() => setMobileMenu(false)}>
                            <FaTimes size={22} />
                        </button>
                    </div>

                    {/* Mobile Language & Theme Controls */}
                    <div className="p-5 border-b dark:border-gray-800 flex items-center gap-3">
                        <button
                            onClick={() => setLanguage(language === "ta" ? "en" : "ta")}
                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-primary transition text-sm font-medium"
                        >
                            <span className={language === "ta" ? "text-primary font-bold" : "text-gray-500"}>த</span>
                            <span className="text-gray-300">/</span>
                            <span className={language === "en" ? "text-primary font-bold" : "text-gray-500"}>En</span>
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-primary transition"
                        >
                            {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} className="text-yellow-500" />}
                        </button>
                    </div>

                    <div className="p-5 space-y-2">
                        <Link
                            href="/"
                            className="block p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-800"
                            onClick={() => setMobileMenu(false)}
                        >
                            🏠 {t("முகப்பு", "Home")}
                        </Link>

                        <Link
                            href="/shiva-temples"
                            className="block p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-800"
                            onClick={() => setMobileMenu(false)}
                        >
                            🕉 {t("சிவன் கோவில்கள்", "Shiva Temples")}
                        </Link>

                        <Link
                            href="/vishnu-temples"
                            className="block p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-800"
                            onClick={() => setMobileMenu(false)}
                        >
                            🙏 {t("விஷ்ணு கோவில்கள்", "Vishnu Temples")}
                        </Link>

                        <Link
                            href="/murugan-temples"
                            className="block p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-800"
                            onClick={() => setMobileMenu(false)}
                        >
                            🔱 {t("முருகன் கோவில்கள்", "Murugan Temples")}
                        </Link>

                        <Link
                            href="/amman-temples"
                            className="block p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-800"
                            onClick={() => setMobileMenu(false)}
                        >
                            🌺 {t("அம்மன் கோவில்கள்", "Amman Temples")}
                        </Link>

                        <Link
                            href="/108-divya-desam"
                            className="block p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-800"
                            onClick={() => setMobileMenu(false)}
                        >
                            🛕 {t("108 திவ்ய தேசங்கள்", "108 Divya Desams")}
                        </Link>

                        <Link
                            href="/navagraha-temples"
                            className="block p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-800"
                            onClick={() => setMobileMenu(false)}
                        >
                            ☀ {t("நவகிரக கோவில்கள்", "Navagraha Temples")}
                        </Link>

                        <Link
                            href="/blog"
                            className="block p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-800"
                            onClick={() => setMobileMenu(false)}
                        >
                            📚 {t("கட்டுரைகள்", "Articles")}
                        </Link>

                        <Link
                            href="/contact"
                            className="block p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-800"
                            onClick={() => setMobileMenu(false)}
                        >
                            📞 {t("தொடர்புக்கு", "Contact")}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}