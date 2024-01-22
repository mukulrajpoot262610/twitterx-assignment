import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NotepadText, UserCheck2, Users2 } from 'lucide-react';
import PostCard from '@/components/common/PostCard';
import FollowerCard from '@/components/common/FollowerCard';

const ProfilePage = () => {
  return (
    <div className='max-w-3xl mx-auto pt-20'>
      <div className='flex items-center gap-6'>
        <Avatar className='h-40 w-40'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className='flex flex-col'>
          <h1 className='text-4xl mb-4 font-bold'>Mukul Rajpoot</h1>
          <div className='flex items-center gap-8'>
            <p className='text-base text-gray-400 flex items-center gap-1'>
              {' '}
              <NotepadText className='h-5 w-5' />
              Post: 200
            </p>
            <p className='text-base text-gray-400 flex items-center gap-1'>
              <Users2 className='h-5 w-5' />
              Followers: 200
            </p>
            <p className='text-base text-gray-400 flex items-center gap-1'>
              <UserCheck2 className='h-5 w-5' />
              Following: 200
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue='posts' className='w-full border-t-2 mt-6'>
        <TabsList className='w-full'>
          <TabsTrigger value='posts' className='w-full gap-1'>
            <NotepadText className='h-5 w-5' />
            Posts
          </TabsTrigger>
          <TabsTrigger value='followers' className='w-full gap-1'>
            <Users2 className='h-5 w-5' />
            Followers
          </TabsTrigger>
          <TabsTrigger value='following' className='w-full gap-1'>
            <UserCheck2 className='h-5 w-5' />
            Following
          </TabsTrigger>
        </TabsList>
        <TabsContent value='posts'>
          <div className='flex flex-col gap-2 h-[65vh] overflow-auto'>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </TabsContent>
        <TabsContent value='followers'>
          <div className='flex flex-col gap-2 h-[65vh] overflow-auto'>
            <FollowerCard />
            <FollowerCard />
            <FollowerCard />
            <FollowerCard />
          </div>
        </TabsContent>
        <TabsContent value='following'>
          <div className='flex flex-col gap-2 h-[65vh] overflow-auto'>
            <FollowerCard />
            <FollowerCard />
            <FollowerCard />
            <FollowerCard />
            <FollowerCard />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
