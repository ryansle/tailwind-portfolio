// Components
import { Analytics } from '@vercel/analytics/react';

// Utilities
import { Inter } from 'next/font/google';
import './globals.css';
import { siteMetadata } from '@/lib/seo';

// Types
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = siteMetadata;

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
