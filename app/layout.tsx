// Components
import { Analytics } from '@vercel/analytics/react';

// Utilities
import { Inter } from 'next/font/google';
import './globals.css';
// import seo from '@/seo.config';

// Types
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = seo;

export const metadata: Metadata = {
  metadataBase: new URL('https://ryanle.dev'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
};
