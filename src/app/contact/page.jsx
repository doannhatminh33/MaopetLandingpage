'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Map from '../../components/Map';

const contactInfo = [
  {
    id: 1,
    icon: <FaPhone className="text-2xl text-orange-500" />,
    title: 'Điện Thoại',
    content: '083 296 8690',
    description: 'Hotline: 083 296 8690'
  },
  {
    id: 2,
    icon: <FaEnvelope className="text-2xl text-orange-500" />,
    title: 'Email',
    content: 'shopmaopet@gmail.com',
    // description: 'shopmaopet@gmail.com'  // Temporarily disabled
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt className="text-2xl text-orange-500" />,
    title: 'Địa Chỉ',
    content: '7 ngõ 951 Đường Giải Phóng, Quận Hoàng Mai',
    description: 'Hà Nội, Việt Nam'
  },
  {
    id: 4,
    icon: <FaClock className="text-2xl text-orange-500" />,
    title: 'Giờ Làm Việc',
    content: 'Thứ 2 - Thứ 6: 8:00 - 21:00',
    description: 'Thứ 7 - Chủ Nhật: 9:00 - 20:00'
  }
];

const socialLinks = [
  {
    id: 1,
    icon: <FaFacebook className="text-2xl" />,
    name: 'Facebook',
    url: 'https://facebook.com/maopetshop'
  },
  {
    id: 2,
    icon: <FaInstagram className="text-2xl" />,
    name: 'Instagram',
    url: 'https://instagram.com/maopetshop'
  },
  {
    id: 3,
    icon: <FaYoutube className="text-2xl" />,
    name: 'YouTube',
    url: 'https://youtube.com/maopetshop'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission to your backend
    // For now, we'll just simulate a successful submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Có lỗi xảy ra. Vui lòng thử lại sau.'
      });
    }
  };

  return (
    <div className="font-sans">
      <div className="px-[312px] mx-auto">
        <Header />
        <Navbar />

        {/* Hero Section */}
        <div className="relative h-[300px] bg-orange-100">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src="/contact/hero-bg.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white">
            <div className="max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h1>
              <p className="text-lg md:text-xl">
                Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info) => (
                <div key={info.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-900 mb-1">{info.content}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Gửi Tin Nhắn Cho Chúng Tôi</h2>
                {formStatus.submitted ? (
                  <div className={`p-4 rounded-lg ${formStatus.error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                    {formStatus.message}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Họ và tên *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Số điện thoại
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Chủ đề *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Nội dung tin nhắn *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Gửi Tin Nhắn
                    </button>
                  </form>
                )}
              </div>

              {/* Map and Social Links */}
              <div className="space-y-8">
                {/* Map */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Vị Trí Của Chúng Tôi</h2>
                  <div className="rounded-lg overflow-hidden">
                    <Map />
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Kết Nối Với Chúng Tôi</h2>
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((social) => (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-orange-500 transition-colors"
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Câu Hỏi Thường Gặp</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Làm thế nào để đặt hàng?</h3>
                      <p className="text-gray-600">
                        Bạn có thể đặt hàng trực tuyến qua website hoặc gọi điện thoại đến hotline 083 296 8690 của chúng tôi.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Thời gian giao hàng?</h3>
                      <p className="text-gray-600">
                        Chúng tôi giao hàng trong vòng 24-48 giờ tại Hà Nội và 3-5 ngày cho các tỉnh thành khác.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Chính sách đổi trả?</h3>
                      <p className="text-gray-600">
                        Chúng tôi chấp nhận đổi trả trong vòng 7 ngày nếu sản phẩm còn nguyên vẹn và có hóa đơn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
} 