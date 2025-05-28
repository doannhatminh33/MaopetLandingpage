'use client';

import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import Slider from "react-slick";

const slides = [
  {
    image: "/Heros.png",
  },
  {
    image: "/toymouse.jpg",
  },
];

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="relative">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i}>
            <div
              className="relative h-[500px] bg-cover bg-center flex items-center text-white"
            >
              <Image
                src={slide.image}
                alt="Hero slide"
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
                quality={100}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="bg-rose-500">
                  <Link 
                    href="/products" 
                    className="inline-block bg-[#98ff98] hover:bg-orange-500 text-teal-500 px-6 py-2 rounded-full mt-4 transition"
                  >
                    Xem Thêm
                  </Link>
                </div>
                <Link 
                  href="/mint" 
                  className="inline-block !bg-[#000000] text-white px-4 py-2 rounded"
                >
                  Nút mint
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
// export default function Hero() {
//   return (
//     <section className="bg-gray-50 p-8 flex flex-col md:flex-row items-center justify-between">
//       <img
//         src="src/assets/Heros.png"
//         alt="Mèo ăn kem"
//         className="w-full rounded-xl shadow"
//       />
//     </section>
//   );
// }