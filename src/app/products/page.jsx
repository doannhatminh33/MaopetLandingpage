'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Sample product data - In a real app, this would come from an API or database
const products = [
  {
    id: 1,
    name: 'Premium Cat Food',
    price: 299000,
    image: '/products/cat-food.jpg',
    category: 'food',
    description: 'High-quality cat food with balanced nutrition',
    inStock: true,
    brand: 'Royal Canin',
  },
  {
    id: 2,
    name: 'Cat Tree Tower',
    price: 1299000,
    image: '/products/cat-tree.jpg',
    category: 'furniture',
    description: 'Multi-level cat tree with scratching posts',
    inStock: true,
    brand: 'Cat Tower Pro',
  },
  {
    id: 3,
    name: 'Cat Toy Set',
    price: 199000,
    image: '/products/cat-toy.jpg',
    category: 'toys',
    description: 'Interactive toy set for playful cats',
    inStock: false,
    brand: 'Pet Toys Co',
  },
  {
    id: 4,
    name: 'Premium Dog Food',
    price: 399000,
    image: '/products/dog-food.jpg',
    category: 'food',
    description: 'Nutritious dog food for all breeds',
    inStock: true,
    brand: 'Royal Canin',
  },
  {
    id: 5,
    name: 'Dog Bed Deluxe',
    price: 899000,
    image: '/products/dog-bed.jpg',
    category: 'furniture',
    description: 'Comfortable orthopedic dog bed',
    inStock: true,
    brand: 'Pet Comfort',
  },
  {
    id: 6,
    name: 'Interactive Dog Toy Ball',
    price: 159000,
    image: '/products/dog-toy.jpg',
    category: 'toys',
    description: 'Smart interactive ball for dogs',
    inStock: true,
    brand: 'Pet Toys Co',
  },
  {
    id: 7,
    name: 'Cat Carrier Premium',
    price: 599000,
    image: '/products/cat-carrier.jpg',
    category: 'accessories',
    description: 'Comfortable and secure cat carrier',
    inStock: true,
    brand: 'Pet Travel',
  },
  {
    id: 8,
    name: 'Dog Leash Set',
    price: 299000,
    image: '/products/dog-leash.jpg',
    category: 'accessories',
    description: 'Durable leash with collar set',
    inStock: true,
    brand: 'Pet Gear',
  },
  {
    id: 9,
    name: 'Cat Litter Box Deluxe',
    price: 799000,
    image: '/products/cat-litter.jpg',
    category: 'accessories',
    description: 'Self-cleaning cat litter box',
    inStock: false,
    brand: 'Pet Care',
  },
  {
    id: 10,
    name: 'Dog Training Kit',
    price: 499000,
    image: '/products/dog-training.jpg',
    category: 'toys',
    description: 'Complete dog training kit with treats',
    inStock: true,
    brand: 'Pet Training',
  },
  {
    id: 11,
    name: 'Cat Grooming Set',
    price: 349000,
    image: '/products/cat-grooming.jpg',
    category: 'accessories',
    description: 'Professional cat grooming tools',
    inStock: true,
    brand: 'Pet Care',
  },
  {
    id: 12,
    name: 'Dog Food Storage Container',
    price: 249000,
    image: '/products/dog-storage.jpg',
    category: 'accessories',
    description: 'Airtight food storage container',
    inStock: true,
    brand: 'Pet Storage',
  },
  {
    id: 13,
    name: 'Cat Window Perch',
    price: 449000,
    image: '/products/cat-perch.jpg',
    category: 'furniture',
    description: 'Window-mounted cat perch',
    inStock: true,
    brand: 'Cat Tower Pro',
  },
  {
    id: 14,
    name: 'Dog Dental Care Kit',
    price: 199000,
    image: '/products/dog-dental.jpg',
    category: 'accessories',
    description: 'Complete dental care set for dogs',
    inStock: true,
    brand: 'Pet Health',
  },
  {
    id: 15,
    name: 'Cat Water Fountain',
    price: 399000,
    image: '/products/cat-fountain.jpg',
    category: 'accessories',
    description: 'Automatic water fountain for cats',
    inStock: false,
    brand: 'Pet Care',
  },
  {
    id: 16,
    name: 'Dog Raincoat',
    price: 299000,
    image: '/products/dog-raincoat.jpg',
    category: 'accessories',
    description: 'Waterproof dog raincoat',
    inStock: true,
    brand: 'Pet Gear',
  },
  {
    id: 17,
    name: 'Cat Scratching Post',
    price: 349000,
    image: '/products/cat-scratch.jpg',
    category: 'furniture',
    description: 'Multi-level scratching post',
    inStock: true,
    brand: 'Cat Tower Pro',
  },
  {
    id: 18,
    name: 'Dog Treats Variety Pack',
    price: 149000,
    image: '/products/dog-treats.jpg',
    category: 'food',
    description: 'Assorted healthy dog treats',
    inStock: true,
    brand: 'Pet Treats',
  },
  {
    id: 19,
    name: 'Cat Collar with Bell',
    price: 99000,
    image: '/products/cat-collar.jpg',
    category: 'accessories',
    description: 'Adjustable cat collar with bell',
    inStock: true,
    brand: 'Pet Gear',
  },
  {
    id: 20,
    name: 'Dog Cooling Mat',
    price: 299000,
    image: '/products/dog-mat.jpg',
    category: 'accessories',
    description: 'Self-cooling mat for dogs',
    inStock: true,
    brand: 'Pet Comfort',
  },
  {
    id: 21,
    name: 'Cat Vitamin Supplements',
    price: 199000,
    image: '/products/cat-vitamins.jpg',
    category: 'food',
    description: 'Essential vitamins for cats',
    inStock: true,
    brand: 'Pet Health',
  },
  {
    id: 22,
    name: 'Dog Puzzle Toy',
    price: 249000,
    image: '/products/dog-puzzle.jpg',
    category: 'toys',
    description: 'Interactive puzzle toy for dogs',
    inStock: true,
    brand: 'Pet Toys Co',
  },
  {
    id: 23,
    name: 'Cat Harness and Leash',
    price: 199000,
    image: '/products/cat-harness.jpg',
    category: 'accessories',
    description: 'Comfortable cat harness with leash',
    inStock: false,
    brand: 'Pet Gear',
  }
];

const categories = [
  { id: 'all', name: 'Tất cả' },
  { id: 'food', name: 'Thức ăn' },
  { id: 'furniture', name: 'Đồ dùng' },
  { id: 'toys', name: 'Đồ chơi' },
  { id: 'accessories', name: 'Phụ kiện' },
];

const brands = [...new Set(products.map(product => product.brand))];

const priceRanges = [
  { id: 'all', name: 'Tất cả', min: 0, max: Infinity },
  { id: 'under-500k', name: 'Dưới 500.000đ', min: 0, max: 500000 },
  { id: '500k-1m', name: '500.000đ - 1.000.000đ', min: 500000, max: 1000000 },
  { id: '1m-2m', name: '1.000.000đ - 2.000.000đ', min: 1000000, max: 2000000 },
  { id: 'over-2m', name: 'Trên 2.000.000đ', min: 2000000, max: Infinity },
];

// Example tags - you might want to generate these dynamically based on product data
const tags = ['Dog food', 'Cat food', 'Natural', 'Parrot', 'Small dog', 'Cat'];

// Example popular products - replace with actual data fetching
const popularProducts = [
  { id: 1, name: 'Premium Dog Food', price: 99, image: '/placeholder-product.png' },
  { id: 2, name: 'Premium Cat Food', price: 220, image: '/placeholder-product.png' },
  { id: 3, name: 'Cat Bed', price: 50, image: '/placeholder-product.png' },
  { id: 4, name: 'Dog Leash', price: 220, image: '/placeholder-product.png' },
  { id: 5, name: 'Cat Bowl', price: 220, image: '/placeholder-product.png' },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [priceRangeValue, setPriceRangeValue] = useState([0, 2000000]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    // Filter by price: if slider is at min, show all; otherwise, show products <= slider value
    const matchesPriceRange = priceRangeValue[0] === 0 ? true : product.price <= priceRangeValue[0];
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesStock = !showInStockOnly || product.inStock;
    // Add tag filtering (placeholder logic)
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag =>
      product.description.toLowerCase().includes(tag.toLowerCase()) // Example: search tag in description
    );

    return matchesCategory && matchesSearch && matchesPriceRange && matchesBrand && matchesStock && matchesTags;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  // New function to toggle tags
  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Pagination controls
  const renderPagination = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center items-center space-x-2 mt-8">
        <button
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-lg ${
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
          }`}
        >
          Previous
        </button>
        
        {startPage > 1 && (
          <>
            <button
              onClick={() => setCurrentPage(1)}
              className="px-3 py-1 rounded-lg bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            >
              1
            </button>
            {startPage > 2 && <span className="px-2">...</span>}
          </>
        )}

        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-3 py-1 rounded-lg ${
              currentPage === number
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
            }`}
          >
            {number}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="px-2">...</span>}
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="px-3 py-1 rounded-lg bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-lg ${
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
          }`}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="font-sans">
      <div className="px-[312px] mx-auto">
        <Header />
        <Navbar />
        <div className="min-h-screen bg-gray-50">
          {/* Header Section */}
          <div className="bg-white shadow-sm">
            <div className="py-8">
              <h1 className="text-3xl font-bold text-gray-900">Sản phẩm</h1>
              <p className="mt-2 text-gray-600">Khám phá các sản phẩm chất lượng cho thú cưng của bạn</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="py-8">
            {/* Search and Filter Toggle */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 md:hidden"
              >
                {showFilters ? 'Ẩn bộ lọc' : 'Hiện bộ lọc'}
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className={`w-full md:w-64 space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-3">Filter by categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category.id} className="flex items-center justify-between space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={selectedCategory === category.id || selectedCategory === 'all'}
                            onChange={() => setSelectedCategory(category.id)}
                            className="rounded text-orange-500 focus:ring-orange-500"
                          />
                          <span className="text-sm">{category.name}</span>
                        </div>
                        {/* Placeholder count */}
                        <span className="text-sm text-gray-500">{category.id === 'all' ? products.length : products.filter(p => p.category === category.id).length}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filter by Price */}
                <div>
                  <h3 className="font-semibold mb-3">Filter by Price (Max)</h3>
                  {/* Single Price Slider Input */}
                  <div className="mb-2">
                    <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-2">Max Price:</label>
                    <input
                      id="maxPrice"
                      type="range"
                      min={0}
                      max={3000000} // Set a reasonable max value, adjust as needed, consider max product price
                      value={priceRangeValue[0]} // Use the first element for single slider value
                      onChange={(e) => {
                        const newMax = parseInt(e.target.value, 10);
                        setPriceRangeValue([newMax]); // Update state with single value in array
                      }}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{formatPrice(0)}</span>
                    <span>{formatPrice(3000000)}</span> {/* Display max range value */}
                  </div>

                  <div className="flex justify-between items-center mb-4 text-sm text-gray-700">
                    {/* Display current max price */}
                    <span>Max Price: {priceRangeValue[0] === 0 ? 'No filter' : formatPrice(priceRangeValue[0])}</span>
                    {/* Keeping Apply button as per design, though filtering now happens on change */}
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm">Apply</button>
                  </div>
                </div>

                {/* Filter by Brands */}
                <div>
                  <h3 className="font-semibold mb-3">Filter by brands</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center justify-between space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                         <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => toggleBrand(brand)}
                            className="rounded text-orange-500 focus:ring-orange-500"
                          />
                          <span className="text-sm">{brand}</span>
                        </div>
                        {/* Placeholder count */}
                         <span className="text-sm text-gray-500">{products.filter(p => p.brand === brand).length}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filter by tags */}
                <div>
                  <h3 className="font-semibold mb-3">Filter by tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors
                          ${selectedTags.includes(tag)
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="font-semibold mb-3">Tình trạng</h3>
                  <label className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showInStockOnly}
                      onChange={(e) => setShowInStockOnly(e.target.checked)}
                      className="rounded text-orange-500 focus:ring-orange-500"
                    />
                    <span className="text-sm">Chỉ hiện sản phẩm còn hàng</span>
                  </label>
                </div>

                 {/* Popular products */}
                 <div>
                  <h3 className="font-semibold mb-3">Popular products</h3>
                  <ul className="space-y-4">
                    {popularProducts.map(product => (
                      <li key={product.id} className="flex items-center gap-3">
                         {/* Placeholder Image */}
                        <div className="w-12 h-12 bg-gray-200 rounded-md flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-600">${product.price}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Products Section */}
              <div className="flex-1">
                {/* Sort Options */}
                <div className="flex justify-end mb-6">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="default">Mặc định</option>
                    <option value="price-asc">Giá tăng dần</option>
                    <option value="price-desc">Giá giảm dần</option>
                    <option value="name-asc">Tên A-Z</option>
                    <option value="name-desc">Tên Z-A</option>
                  </select>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-48 w-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        {!product.inStock && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                            Hết hàng
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
                        <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-orange-500">
                            {formatPrice(product.price)}
                          </span>
                          <button 
                            className={`px-4 py-2 rounded-lg transition-colors ${
                              product.inStock
                                ? 'bg-teal-500 text-white hover:bg-teal-600'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={!product.inStock}
                          >
                            {product.inStock ? 'Mua ngay' : 'Hết hàng'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Empty State */}
                {currentProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">Không tìm thấy sản phẩm nào phù hợp với bộ lọc.</p>
                  </div>
                )}

                {/* Pagination */}
                {sortedProducts.length > 0 && renderPagination()}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
} 