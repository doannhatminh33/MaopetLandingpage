import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MaoPet - Cửa hàng thú cưng uy tín tại Hà Nội",
  description: "MaoPet - Cửa hàng cung cấp thức ăn, phụ kiện và đồ chơi cho thú cưng chất lượng cao. Địa chỉ: Số 7 Ngõ 951 Giải Phóng, Giáp Bát, Hoàng Mai, Hà Nội",
  keywords: "MaoPet, thú cưng, thức ăn cho mèo, phụ kiện thú cưng, đồ chơi cho mèo, cửa hàng thú cưng Hà Nội",
  authors: [{ name: "MaoPet" }],
  creator: "MaoPet",
  publisher: "MaoPet",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://maopet.com'),
  openGraph: {
    title: "MaoPet - Cửa hàng thú cưng uy tín tại Hà Nội",
    description: "MaoPet - Cửa hàng cung cấp thức ăn, phụ kiện và đồ chơi cho thú cưng chất lượng cao",
    url: 'https://maopet.com',
    siteName: 'MaoPet',
    images: [
      {
        url: '/LogoOnly.png',
        width: 800,
        height: 600,
        alt: 'MaoPet Logo',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MaoPet - Cửa hàng thú cưng uy tín tại Hà Nội",
    description: "MaoPet - Cửa hàng cung cấp thức ăn, phụ kiện và đồ chơi cho thú cưng chất lượng cao",
    images: ['/LogoOnly.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google Search Console verification code
  },
  icons: {
    icon: [
      { url: '/LogoOnly.png' },
    ],
    apple: [
      { url: '/LogoOnly.png' },
    ],
    shortcut: ['/LogoOnly.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
