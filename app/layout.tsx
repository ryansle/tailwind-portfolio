// Components
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/global';
import { Layout } from '@/components/navigation/Layout';

// Utilities
import { Inter } from 'next/font/google';
import './globals.css';
import { siteMetadata } from '@/lib/seo';

// Types
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = siteMetadata;

// Applies to every page below this layout. Next only accepts a literal here,
// so it cannot be lifted into a shared constant.
export const revalidate = 30;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
};
