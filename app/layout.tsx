'use client';
import './globals.css';
import { Provider } from 'react-redux';
import { store } from '@/global/store';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-zinc-50'>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
