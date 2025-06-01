'use client'

import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '@/app/components/Navbar';
import Header from "@/app/components/Header"
import Hero from "@/app/components/Hero"
import Categories from "@/app/components/Categories"
import FeaturedProducts from "@/app/components/FeaturedProducts"
import BestsellerProducts from '@/app/components/BestsellerProducts'
import Infoblocks from "@/app/components/Infoblocks"
import NewsAndBlog from '@/app/components/NewsAndBlog'
import Footer from '@/app/components/Footer'
import React from 'react'

export default function Home() {
  return (
    <div className="font-sans">
      <div className="px-[312px] mx-auto">
        <Header />
        <Navbar />
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Infoblocks />
        <BestsellerProducts />
        <NewsAndBlog />
        <Footer />
      </div>
      
    </div>
  );
}

