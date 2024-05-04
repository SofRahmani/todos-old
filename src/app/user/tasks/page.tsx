import { baseAuth } from '@/auth/auth'
import LoggedInAvatar from '@/components/auth/LoggedInAvatar'
import LogoutButton from '@/components/auth/LogoutButton'
import TasksDashboard from '@/components/dashboard/TasksDashboard'
import { redirect } from 'next/navigation'

export default async function Home() {

  const session = await baseAuth();
  const user = session?.user;

  if (!session?.user) {
    redirect('/')
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <TasksDashboard title='Mes tâches'>
        <h1>tasks</h1>
      </TasksDashboard>
    </main>
  );
}