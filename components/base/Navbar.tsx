import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const Navbar = () => {
  const isAuth = true;

  return (
    <nav
      className={`fixed top-0 left-0 w-screen bg-white z-50 border-b transition-all duration-500 p-6 h-16`}
    >
      <div className='flex justify-between items-center max-w-6xl mx-auto h-full'>
        <Link href='/'>
          <div className='w-fit flex flex-col justify-end items-end cursor-pointer'>
            tweetX.
          </div>
        </Link>

        {isAuth ? (
          <div className='flex items-center gap-3'>
            <Link href='/feed'>
              <Button variant='ghost'>Feed</Button>
            </Link>
            <Link href='/feed/users'>
              <Button variant='ghost'>Users</Button>
            </Link>
            <Link href='/feed/profile'>
              <Button variant='ghost'>Profile</Button>
            </Link>
          </div>
        ) : (
          <div className='flex items-center gap-3'>
            <Link href='/auth'>
              <Button variant='outline'>Login</Button>
            </Link>
            <Link href='/auth/register'>
              <Button>Register</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
