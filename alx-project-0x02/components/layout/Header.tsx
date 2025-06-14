import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          <Link href="/">ALX Listings</Link>
        </div>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/home">
            <span className="text-gray-700 hover:text-blue-600">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-700 hover:text-blue-600">About</span>
          </Link>
          <Link href="/posts">
            <span className="text-gray-700 hover:text-blue-600">posts</span>
          </Link>
          <Link href="/users">
            <span className="text-gray-700 hover:text-blue-600">users</span>
          </Link>
        </nav>

        {/* Auth buttons */}
        <div className="space-x-4">
          <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
