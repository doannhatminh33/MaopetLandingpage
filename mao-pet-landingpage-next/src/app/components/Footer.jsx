'use client';

import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Mô tả */}
        <div>
          <h2 className="text-xl font-bold text-orange-500 mb-4">MaoPet</h2>
          <p>
            Cửa hàng thú cưng đáng yêu, uy tín tại Hà Nội. Chuyên cung cấp sản phẩm và dịch vụ cho thú cưng.
          </p>
        </div>

        {/* Điều hướng */}
        <div>
          <h3 className="font-semibold mb-3">Liên kết</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-orange-500">Trang Chủ</Link></li>
            <li><Link href="/products" className="hover:text-orange-500">Sản Phẩm</Link></li>
            <li><Link href="/about" className="hover:text-orange-500">Giới Thiệu</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500">Liên hệ</Link></li>
          </ul>
        </div>

        {/* Thông tin liên hệ */}
        <div>
          <h3 className="font-semibold mb-3">Liên hệ</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 0913 847 404</li>
            <li>📧 shopmaopet@gmail.com</li>
            <li>📍 Số 7 ngõ 951 Giải Phóng, Hoàng Mai, HN</li>
          </ul>
        </div>

        {/* Mạng xã hội */}
        <div>
          <h3 className="font-semibold mb-3">Theo dõi chúng tôi</h3>
          <div className="flex gap-4 text-xl">
            <Link href="https://www.facebook.com/maopet.shopthucung" className="hover:text-orange-500">
              <FaFacebook />
            </Link>
            <Link href="https://shopee.vn/shop.maopet" className="hover:text-orange-500">
              <Image 
                src="/ShopeeLogo.png" 
                alt="Shopee" 
                width={24} 
                height={24} 
                className="hover:opacity-80" 
              />
            </Link>
            <Link href="#" className="hover:text-orange-500">📸</Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-gray-500">
        &copy; 2025 MaoPet. All rights reserved.
      </div>
    </footer>
  );
}