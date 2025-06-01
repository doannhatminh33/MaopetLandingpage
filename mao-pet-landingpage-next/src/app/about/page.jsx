'use client';

import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teamMembers = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    position: 'Founder & CEO',
    image: '/team/ceo.jpg',
    description: 'Với hơn 10 năm kinh nghiệm trong ngành thú cưng, anh A đã thành lập Mao Pet Shop với mong muốn mang đến những sản phẩm chất lượng nhất cho thú cưng Việt Nam.'
  },
  {
    id: 2,
    name: 'Trần Thị B',
    position: 'Head of Product',
    image: '/team/product.jpg',
    description: 'Chị B là chuyên gia về dinh dưỡng thú cưng với bằng Thạc sĩ về Thú y. Chị đảm bảo mọi sản phẩm tại Mao Pet Shop đều đạt tiêu chuẩn chất lượng cao nhất.'
  },
  {
    id: 3,
    name: 'Lê Văn C',
    position: 'Customer Service Manager',
    image: '/team/customer.jpg',
    description: 'Với tình yêu lớn dành cho động vật, anh C luôn nỗ lực mang đến trải nghiệm mua sắm tốt nhất cho khách hàng và thú cưng của họ.'
  }
];

const values = [
  {
    id: 1,
    title: 'Chất lượng',
    description: 'Cam kết cung cấp những sản phẩm chất lượng cao nhất cho thú cưng của bạn.',
    icon: '✨'
  },
  {
    id: 2,
    title: 'Tận tâm',
    description: 'Luôn lắng nghe và thấu hiểu nhu cầu của khách hàng và thú cưng.',
    icon: '❤️'
  },
  {
    id: 3,
    title: 'Đổi mới',
    description: 'Không ngừng cập nhật và cải tiến để mang đến những sản phẩm tốt nhất.',
    icon: '🚀'
  },
  {
    id: 4,
    title: 'Bền vững',
    description: 'Cam kết phát triển bền vững và thân thiện với môi trường.',
    icon: '🌱'
  }
];

export default function AboutPage() {
  return (
    <div className="font-sans">
      <div className="px-[312px] mx-auto">
        <Header />
        <Navbar />
        
        {/* Hero Section */}
        <div className="relative h-[400px] bg-orange-100">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src="/about/hero-bg.jpg"
            alt="About Us Hero"
            fill
            className="object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white">
            <div className="max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Về Chúng Tôi</h1>
              <p className="text-lg md:text-xl">
                Mao Pet Shop - Nơi yêu thương và chăm sóc thú cưng của bạn
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Câu Chuyện Của Chúng Tôi</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px]">
                <Image
                  src="/about/story.jpg"
                  alt="Our Story"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Mao Pet Shop được thành lập vào năm 2020 với tình yêu và đam mê dành cho thú cưng. 
                  Chúng tôi bắt đầu từ một cửa hàng nhỏ tại Hà Nội, với mong muốn mang đến những sản phẩm 
                  chất lượng cao cho thú cưng Việt Nam.
                </p>
                <p className="text-gray-600">
                  Sau hơn 3 năm phát triển, chúng tôi đã trở thành một trong những địa chỉ tin cậy 
                  hàng đầu về sản phẩm thú cưng tại Việt Nam. Với hơn 1000+ sản phẩm đa dạng, 
                  chúng tôi cam kết mang đến những trải nghiệm mua sắm tốt nhất cho khách hàng.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Sứ Mệnh Của Chúng Tôi</h2>
            <p className="text-xl text-gray-600 mb-8">
              Chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất, 
              cùng với dịch vụ tận tâm để đảm bảo thú cưng của bạn luôn được 
              chăm sóc tốt nhất.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Đội Ngũ Của Chúng Tôi</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="text-center">
                  <div className="relative h-64 w-64 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-orange-500 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="py-16 bg-orange-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h2>
            <p className="text-gray-600 mb-8">
              Bạn có câu hỏi hoặc cần tư vấn? Hãy liên hệ với chúng tôi ngay hôm nay!
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Địa Chỉ</h3>
                <p className="text-gray-600">123 Đường ABC, Quận XYZ, Hà Nội</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">contact@maopetshop.com</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Điện Thoại</h3>
                <p className="text-gray-600">083 296 8690</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
} 