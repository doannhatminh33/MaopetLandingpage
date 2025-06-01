'use client';

import React from "react";
import Image from 'next/image';

export default function Infoblocks() {
  return (
    <section className="bg-gray-50 p-8">
      <div className="relative w-full h-[300px]">
        <Image
          src="/InfoBlocks.png"
          alt="Information blocks"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}