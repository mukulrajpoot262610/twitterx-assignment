'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import toast from 'react-hot-toast';
// import { useDispatch } from 'react-redux';
// import { setAuth } from '@/global/authSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

interface UserLoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserLoginForm({ className, ...props }: UserLoginFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');

  //   const dispatch = useDispatch();

  const router = useRouter();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const adminId = process.env.NEXT_PUBLIC_ADMIN_ID;
    const adminpassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (adminId === id && adminpassword === password) {
      //   dispatch(setAuth({ data: { id: adminId } }));
      toast.success('Login Successful');
      router.push('/admin');
    } else {
      toast.error('Wrong Credentials');
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className={cn('grid gap-6 mt-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className='grid gap-3'>
          <div className='grid gap-1'>
            <Label className='text-xs' htmlFor='email'>
              Email
            </Label>
            <Input
              id='id'
              placeholder='email'
              type='text'
              autoCapitalize='none'
              autoComplete='text'
              autoCorrect='off'
              disabled={isLoading}
              onChange={(e) => setId(e.target.value)}
              value={id}
            />
          </div>

          <div className='grid gap-1'>
            <Label className='text-xs' htmlFor='email'>
              Password
            </Label>
            <Input
              id='password'
              placeholder='password'
              type='password'
              autoCapitalize='none'
              autoCorrect='off'
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <Button disabled={isLoading}>
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            Sign In
          </Button>
        </div>
        <h1 className='text-xs my-3 text-center'>
          Dont&apos;t have an account?&nbsp;
          <Link href='/auth/register'>
            <span className='hover:underline cursor-pointer'>Create Now</span>
          </Link>
        </h1>
      </form>
    </div>
  );
}
