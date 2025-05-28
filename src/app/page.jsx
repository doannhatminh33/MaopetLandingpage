'use client'

import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '@components/Navbar';
import Header from "@components/Header"
import Hero from "@components/Hero"
import Categories from "@components/Categories"
import FeaturedProducts from "@components/FeaturedProducts"
import BestsellerProducts from '@components/BestsellerProducts';
import Infoblocks from "@components/Infoblocks"
import NewsAndBlog from '@components/News&Blog';
import Footer from '@components/Footer';
import React from 'react'

export default function Home() {
  return (
    <div className="font-sans">
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
  );
}

