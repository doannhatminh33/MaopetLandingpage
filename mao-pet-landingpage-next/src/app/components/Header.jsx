import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-gray-50">
      <div className="flex justify-between items-center w-full px-10 py-2 text-sm">
        {/* Bên trái */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <i className="fas fa-phone"></i>
            <FaPhone className="text-gray-600" />
            <span>083 296 8690</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fas fa-envelope"></i>
            <FaEnvelope className="text-gray-600" />
            <span>shopmaopet@gmail.com</span>
          </div>
        </div>

        {/* Bên phải */}
        <div className="flex items-center gap-1 text-right">
          <i className="fas fa-map-marker-alt"></i>
          <FaMapMarkerAlt className="text-gray-600" />
          <span>Số 7 Ngõ 951 Giải Phóng, Giáp Bát, Hoàng Mai, Hà Nội</span>
        </div>
      </div>
      {/* <nav className="space-y-2 text-sm font-medium flex flex-col">
        <a href="#" className="text-orange-500 block">Trang Chủ</a>
        <a href="#" className="block">Sản Phẩm</a>
        <a href="#" className="block">Giới Thiệu</a>
        <a href="#" className="block">Liên Hệ</a>
      </nav> */}
    </header>
  );
}