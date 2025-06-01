'use client';

import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    name: "Cat bowl",
    image: "/CatBowl.jpg",
  },
  {
    name: "Cat bowl",
    image: "/CatBowl2.jpg",
  },
  {
    name: "Premium Cat food",
    image: "/PremiumCatfood.png",
  },
  {
    name: "Dog leash",
    image: "/DogLeash.png",
  },
  {
    name: "Dog bowl",
    image: "/DogBowl.png",
  },
  {
    name: "Premium Dog Food",
    image: "/PremiumDogFood.png",
  },
  {
    name: "Dog Bed",
    image: "/DogBed.png",
  },
  {
    name: "Premium Dog Food",
    image: "/PremiumDogFood2.png",
  },
];

export default function BestsellerProducts() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-5xl font-bold mb-6">Sản phẩm bán chạy</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {products.map((product, index) => (
          <Link 
            href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
            key={index}
            className="block bg-white p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <div className="relative w-full h-48 mb-4">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-4"
                priority={index < 4}
              />
            </div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}