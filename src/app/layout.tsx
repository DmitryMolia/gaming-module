import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PageContainer } from '../components/PageContainer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'League Coding Challenge'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageContainer>
          <main>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </main>
        </PageContainer>
      </body>
    </html>
  );
}
