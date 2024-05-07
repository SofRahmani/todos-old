import { baseAuth } from '@/auth/auth'
import { redirect } from 'next/navigation'


export interface layoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export default async function layout({ children }: layoutProps) {

  const session = await baseAuth();
  const user = session?.user;

  if (!session || !user?.email) {
    redirect('/');
  }

  return (
    <>
      {children}
    </>
  );
}