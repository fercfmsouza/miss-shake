import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { FavoriteProvider } from '../context/FavoriteContext';
import { CartProvider } from '@/context/CartContext';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '700'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Miss Shake',
    default: 'Miss Shake',
  },
  description: 'Buy your dream milkshake',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={poppins.className}>
        <CartProvider>
          <FavoriteProvider>
            <div className='container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </FavoriteProvider>
        </CartProvider>
      </body>
    </html>
  );
}
