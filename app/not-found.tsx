import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <main className='h-screen w-full flex justify-center items-start flex-col max-w-7xl mx-auto p-6'>
      <h1 className='text-2xl lg:text-4xl'>404</h1>
      <h1 className='text-6xl lg:text-9xl my-4'>Page Not Found!</h1>
      <p className='text-2xl lg:text-5xl max-w-3xl mt-6'>
        The page you are looking for doesn&apos;t exist or has been moved
      </p>
      <Link href='/'>
        <Button className='w-fit my-10 p-6 lg:p-8 rounded-full text-sm lg:text-xl'>
          Back to Homepage
        </Button>
      </Link>
    </main>
  );
};

export default NotFound;
