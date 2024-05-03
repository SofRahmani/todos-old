import { baseAuth } from '@/auth/auth'
import LoggedInAvatar from '@/components/auth/LoggedInAvatar'
import LoginButton from '@/components/auth/LoginButton'
import LogoutButton from '@/components/auth/LogoutButton'

export default async function Home() {

  const session = await baseAuth();
  const user = session?.user;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? <LoggedInAvatar /> : <LoginButton />}
      <LogoutButton />
    </main>
  );
}
