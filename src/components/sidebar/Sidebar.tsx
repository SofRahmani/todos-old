import { ClipboardCheck, ClipboardList, FileWarning, Timer } from "lucide-react";
import Link from "next/link";
import LoggedInAvatar from "../auth/LoggedInAvatar";
import LogoutButton from "../auth/LogoutButton";

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  return (
    <aside className=" relative h-screen w-3/12 p-4 ">
      <nav className=" flex h-full flex-col items-center justify-between rounded-xl bg-slate-800 p-4 py-6 ">
        <LoggedInAvatar />
        <div className=" flex w-full flex-col items-center justify-center gap-4 ">
          <Link href="/user/tasks" className="flex w-full items-center justify-center">
            <div className=" flex w-full items-center justify-start gap-4 rounded-xl p-4 pl-10 hover:bg-slate-600">
              <ClipboardList />
              Mes tâches
            </div>
          </Link>
          <Link href="/user/important" className="flex w-full items-center justify-center">
            <div className=" flex w-full items-center justify-start gap-4 rounded-xl p-4 pl-10 hover:bg-slate-600">
              <FileWarning />
              Tâches importantes
            </div>
          </Link>
          <Link href="/user/now" className="flex w-full items-center justify-center">
            <div className=" flex w-full items-center justify-start gap-4 rounded-xl p-4 pl-10 hover:bg-slate-600">
              <Timer />A faire aujourd&apos;hui
            </div>
          </Link>
          <Link href="/user/completed" className="flex w-full items-center justify-center">
            <div className=" flex w-full items-center justify-start gap-4 rounded-xl p-4 pl-10 hover:bg-slate-600">
              <ClipboardCheck />
              Tâches terminées
            </div>
          </Link>
        </div>
        <LogoutButton />
      </nav>
    </aside>
  );
}
