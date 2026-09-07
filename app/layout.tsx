import { Analytics } from '@vercel/analytics/next';
import { JsonLd, Toaster } from '@/components/global';
import { Layout } from '@/components/navigation/Layout';

import '@fontsource-variable/inter';
import './globals.css';
import { siteMetadata, siteViewport } from '@/lib/seo';
import { isFixtureMode } from '@/lib/fixture-mode';
import { siteSchema } from '@/lib/schema';

import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' data-scroll-behavior='smooth'>
      <body style={{ fontFamily: '"Inter Variable", sans-serif' }}>
        {isFixtureMode() && <p className='bg-slate-800 p-3 text-center text-sm text-teal-200'>Demo mode — CMS content is fictional. Contact submissions stay in this browser.</p>}
        <Layout>
          {children}
        </Layout>
        <JsonLd data={siteSchema} />
        <Toaster />
        {!isFixtureMode() && <Analytics />}
      </body>
    </html>
  );
};
