import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { TLanguage } from '@/types/common';
import type { Metadata } from 'next';
import { Be_Vietnam_Pro as FontSans } from 'next/font/google';
import { ReactNode } from 'react';

import Providers from '@/components/providers';
import '@/styles/globals.css';
import { getDictionary } from './dictionaries';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Go Bike',
  description: 'Generated by create next app',
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: {
    lang: TLanguage;
  };
}>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body className={cn('min-h-screen', fontSans.variable, fontSans.className)}>
        <Providers dictionary={dictionary}>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
