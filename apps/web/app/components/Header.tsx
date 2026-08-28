import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full px-4 py-6 bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <span className="text-xl font-semibold font-ibm-plex-mono">Exness</span>
        </Link>
      </div>
    </header>
  );
}
