'use client';

import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const news = [
  {
    name: "Pate Wanpy Happy 100, món ăn tuyệt vời cho mèo cưng!",
    image: "/assets/News1.png",
    createdDate: "24 May,2024"
  },
  {
    name: "Hết tết, boss cũng cần nghỉ ngơi!",
    image: "/assets/News2.png",
    createdDate: "24 May,2024"
  },
  {
    name: "Làm sao để mèo luôn vui vẻ? ",
    image: "/assets/News3.png",
    createdDate: "24 May,2024"
  },
];

export default function NewsAndBlog() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-6">Tin tức</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {news.map((item, index) => (
          <Link 
            href={`/news/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
            key={index}
            className="block bg-white p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <div className="relative w-full h-48 mb-4">
              <Image 
                src={item.image} 
                alt={item.name} 
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="text-teal-500 font-bold">{item.createdDate}</p>
            <h3 className="text-lg font-semibold">{item.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}