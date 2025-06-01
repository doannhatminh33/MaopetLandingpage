'use client';

import React from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src="/Logo.png" alt="Logo" width={32} height={32} className="h-8 w-auto" />
          </Link>
          {/* <span className="font-bold text-orange-500 text-xl">MaoPet</span> */}
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {[
            { name: "Trang Chủ", path: "/" },
            { name: "Sản Phẩm", path: "/products" },
            { name: "Giới Thiệu", path: "/about" },
            { name: "Liên hệ", path: "/contact" }
          ].map((item, i) => (
            <li
              key={i}
              className="font-medium relative transition"
            >
              <Link 
                href={item.path} 
                className="group text-gray-700 hover:text-orange-500 transition-colors duration-300"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 text-orange-50 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Search */}
        <div className="hidden md:flex items-center border rounded-full px-3 py-1 shadow-sm">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            className="outline-none text-sm w-48"
          />
          <svg
            className="w-4 h-4 text-gray-500 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </nav>
  );
}