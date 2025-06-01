import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'MaoPet - Cửa hàng thú cưng đáng yêu',
  description: 'Cửa hàng thú cưng đáng yêu, uy tín tại Hà Nội. Chuyên cung cấp sản phẩm và dịch vụ cho thú cưng.',
  keywords: 'thú cưng, mèo, chó, pet shop, Hà Nội, thức ăn thú cưng, phụ kiện thú cưng',
  authors: [{ name: 'MaoPet' }],
  creator: 'MaoPet',
  publisher: 'MaoPet',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/assets/LogoOnly.png', type: 'image/png' }
    ],
    shortcut: '/assets/LogoOnly.png',
    apple: '/assets/LogoOnly.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
