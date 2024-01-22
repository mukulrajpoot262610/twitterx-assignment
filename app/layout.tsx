'use client';
import './globals.css';
import { Provider } from 'react-redux';
import { store } from '@/global/store';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-zinc-50'>
        <Provider store={store}>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
