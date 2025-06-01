'use client';

import React from "react";
import Image from 'next/image';

const categories = [
  { title: "Hạt thức ăn", image: "/Catfood.png" },
  { title: "Pate", image: "/Catpate.png" },
  { title: "Xẻng & Cát vệ sinh", image: "/CatShovels.png" },
  { title: "Đồ chơi, phụ kiện", image: "/CatScratchTable.png" },
];

export default function Categories() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h1 className="text-5xl font-bold mb-6">Ngành hàng</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {categories.map((cat, index) => (
          <div key={index} className="bg-white-50 rounded-xl shadow hover:scale-105 transition">
            <div className="relative w-full h-48">
              <Image 
                src={cat.image} 
                alt={cat.title} 
                fill
                className="object-contain p-4"
              />
            </div>
            <h3 className="text-lg font-semibold p-4">{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
