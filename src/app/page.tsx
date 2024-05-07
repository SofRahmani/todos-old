import { baseAuth } from '@/auth/auth'
import LoggedInAvatar from '@/components/auth/LoggedInAvatar'
import LoginButton from '@/components/auth/LoginButton'
import LogoutButton from '@/components/auth/LogoutButton'
import { requiredCurrentUser } from '@/auth/current-user'
import { redirect } from 'next/navigation'

export default async function Home() {

  const session = await baseAuth();
  const user = session?.user;

  if (session?.user) {
    redirect('/user/tasks')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginButton />
    </main>
  );
}
