import Navbar from '@/components/base/Navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex max-w-6xl mx-auto min-h-screen items-center justify-between p-24 gap-2'>
        <div className='max-w-sm'>
          <h1 className='font-bold text-xl'>TweetX</h1>
          <h1 className='text-6xl my-2 font-bold'>Your Opinion Matters!</h1>
          <p className='text-gray-400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            molestiae corrupti facere ab eveniet hic eaque consequuntur,
            delectus fuga est placeat a quisquam in! Rem, doloremque. Ullam
            dolores magnam ex.
          </p>
          <Link href='/auth/register'>
            <Button className='mt-4'>Get Started</Button>
          </Link>
        </div>
        <Image src='/header.svg' height={400} width={400} alt='' />
      </main>
    </>
  );
}
