// Components
import { Analytics } from '@vercel/analytics/react';

// Utilities
import { Inter } from 'next/font/google';
import './globals.css';
// import seo from '@/seo.config';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = seo;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
};
