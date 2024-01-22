import PostCard from '@/components/common/PostCard';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import React from 'react';

const Feed = () => {
  return (
    <div className='max-w-3xl mx-auto pt-20'>
      <div className=''>
        <div className='gap-2 relative'>
          <Textarea
            placeholder='Type your message here.'
            className='pr-20 text-xl rounded-xl p-6'
          />
          <Button className='absolute right-2 top-1/2 -translate-y-1/2'>
            <Send />
          </Button>
        </div>
      </div>
      <div className='my-2 h-[76vh] overflow-auto flex flex-col gap-2'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Feed;
