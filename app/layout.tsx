// Components
import { Analytics } from '@vercel/analytics/next';
import { JsonLd, Toaster } from '@/components/global';
import { Layout } from '@/components/navigation/Layout';

// Utilities
import { Inter } from 'next/font/google';
import './globals.css';
import { siteMetadata, siteViewport } from '@/lib/seo';
import { siteSchema } from '@/lib/schema';

// Types
import type { Metadata, Viewport } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

// Applies to every page below this layout. Next only accepts a literal here,
// so it cannot be lifted into a shared constant.
export const revalidate = 30;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' data-scroll-behavior='smooth'>
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
        <JsonLd data={siteSchema} />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
};
