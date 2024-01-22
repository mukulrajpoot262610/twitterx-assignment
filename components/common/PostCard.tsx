import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const PostCard = () => {
  return (
    <div className='bg-white p-6 rounded-xl border'>
      <div className='flex gap-4'>
        <Avatar className='col-span-1'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className='col-span-5'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl mb-4 mt-1 font-bold'>Mukul Rajpoot</h1>
            <p className='text-xs text-gray-400'>10 min ago</p>
          </div>
          <p className='text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            eos molestiae error, ipsa autem quos sed aut qui itaque accusamus
            dolorum nulla tempore. Adipisci unde tempore illum quod porro ipsa?
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
