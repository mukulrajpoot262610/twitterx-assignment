import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';

const FollowerCard = () => {
  return (
    <div className='bg-white p-6 rounded-xl border flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <Avatar className='h-12 w-12'>
          <AvatarImage
            src='https://github.com/shadcn.png'
            className='h-12 w-12'
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className='flex flex-col'>
          <h1 className='text-2xl mt-1 font-bold'>Mukul Rajpoot</h1>
          <p className='text-xs text-gray-400'>Following: 200</p>
        </div>
      </div>
      <Button>Follow</Button>
      {/* <Button variant='ghost'>Following</Button> */}
    </div>
  );
};

export default FollowerCard;
