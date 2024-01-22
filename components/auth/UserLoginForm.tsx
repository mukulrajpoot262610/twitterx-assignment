'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { setAuth } from '@/global/authSlice';

interface UserLoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserLoginForm({ className, ...props }: UserLoginFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();

  const router = useRouter();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const payload = {
      password,
      email: id,
    };

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      if (responseData.success) {
        dispatch(setAuth(responseData.user));
        toast.success('Login Successful');
        router.push('/feed');
      } else {
        toast.error(responseData.error_msg);
      }
    } catch (error) {
      console.error('Error sending POST request:', error);
    } finally {
      setIsLoading(false);
    }
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
