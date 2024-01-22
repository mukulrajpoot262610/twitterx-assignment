import FollowerCard from '@/components/common/FollowerCard';
import React from 'react';

const Users = () => {
  return (
    <div className='max-w-3xl mx-auto pt-20'>
      <h1 className='text-2xl font-bold'>Users</h1>
      <div className='my-2 h-[88vh] overflow-auto flex flex-col gap-2'>
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
      </div>
    </div>
  );
};

export default Users;
