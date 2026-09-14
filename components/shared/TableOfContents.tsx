"use client";

import { useState } from "react";

export interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  title?: string;
  className?: string;
}

export function TableOfContentsSidebar({
  items,
  title = "Table of Contents",
  className = "",
}: TableOfContentsProps) {
  return (
    <aside className={`hidden lg:block w-64 flex-shrink-0 ${className}`}>
      <div className="sticky top-28">
        <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6">
          <h3 className="font-bold text-lg text-amber-900 mb-4">{title}</h3>
          <nav className="space-y-2">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block text-sm py-2 pl-3 border-l-2 border-gray-200 text-gray-600 hover:text-orange-600 hover:border-orange-300 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}

export function TableOfContentsMobile({
  items,
  title = "Table of Contents",
  className = "",
}: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`lg:hidden bg-white rounded-2xl shadow border border-amber-100 p-4 ${className}`}>
      <button
        className="flex items-center justify-between w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-amber-900">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <nav className="mt-4 space-y-2">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block text-sm py-2 text-gray-600 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
