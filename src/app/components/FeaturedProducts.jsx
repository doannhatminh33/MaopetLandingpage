'use client';

import React from "react";
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    name: "Hạt NutriPlan",
    image: "src/assets/FeaturedProducts/Nutriplan.png",
  },
  {
    name: "Pate Ciao",
    image: "src/assets/FeaturedProducts/PateCiao.png",
  },
  {
    name: "Thanh cỏ mèo",
    image: "src/assets/FeaturedProducts/CatGrassStick.png",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-6">Sản phẩm nổi bật</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {products.map((product, index) => (
          <Link 
            href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`} 
            key={index}
            className="block bg-white p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <Image 
              src={product.image} 
              alt={product.name} 
              width={300}
              height={300}
              className="w-full mx-auto mb-4" 
            />
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-left">{product.name}</h3>
              <div className="bg-white rounded-full p-2 shadow hover:bg-orange-100 transition">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}