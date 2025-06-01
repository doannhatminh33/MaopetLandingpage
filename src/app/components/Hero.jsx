'use client';

import React from "react";
import Link from 'next/link';
import Image from 'next/image';

const slide = {
  image: "/Heros.png",
};

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white">
        <Image
          src={slide.image}
          alt="Hero slide"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center gap-4 hero-button-container px-6 md:px-10 lg:px-20 max-w-screen-xl mx-auto">
          <Link 
            href="#" 
            className="inline-block bg-[#10AB99] hover:bg-orange-500 px-20 py-4 rounded-lg mt-4 transition"
          >
            Xem Thêm
          </Link>
        </div>
      </div>
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