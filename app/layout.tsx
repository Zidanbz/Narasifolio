import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Fraunces, Literata } from 'next/font/google';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteData } from '@/data/siteData';

import '../styles/globals.css';

const displayFont = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700'],
});

const bodyFont = Literata({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: siteData.site.title,
  description: siteData.site.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteData.site.language} className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
